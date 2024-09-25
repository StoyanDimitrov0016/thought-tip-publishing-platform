import { createBrowserRouter } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import { ROUTES } from "./utils/routes";

import MainLayout from "./layouts/main-layout/MainLayout";
import HomePage from "./pages/home-page/HomePage";
import ArticlePage from "./pages/article-page/ArticlePage";
import AuthorPage from "./pages/author-page/AuthorPage";
import CreateArticlePage from "./pages/create-article-page/CreateArticlePage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import SignUpPage from "./pages/sign-up-page/SignUpPage";
import UserProfilePage from "./pages/user-profile-page/UserProfilePage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ARTICLE,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.AUTHOR,
        element: <AuthorPage />,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />,
      },
      // Restricted routes wrapped inside SignedIn component
      {
        path: ROUTES.CREATE_ARTICLE,
        element: (
          <SignedIn>
            <CreateArticlePage />
          </SignedIn>
        ),
      },
      {
        path: ROUTES.USER_PROFILE,
        element: (
          <SignedIn>
            <UserProfilePage />
          </SignedIn>
        ),
        children: [],
      },
      {
        // Fallback for signed-out users trying to access restricted routes
        path: "*",
        element: (
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        ),
      },
    ],
  },
]);

export default router;
