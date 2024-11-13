import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";

import MainLayout from "../layouts/main-layout/MainLayout";
import HomePage from "../pages/home-page/HomePage";
import ArticlePage from "../pages/article-page/ArticlePage";
import AuthorPage from "../pages/author-page/AuthorPage";
import CreateArticlePage from "../pages/create-article-page/CreateArticlePage";
import UserProfilePage from "../pages/user-profile-page/UserProfilePage";
import LoginPage from "../pages/login-page/LoginPage";
import RegisterPage from "../pages/register-page/RegisterPage";

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
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },

      {
        path: ROUTES.CREATE_ARTICLE,
        element: <CreateArticlePage />,
      },
      {
        path: ROUTES.USER_PROFILE,
        element: <UserProfilePage />,
        children: [],
      },
      {
        // Fallback for logout-out users trying to access restricted routes
        path: "*",
        element: <span>Redirect</span>,
      },
    ],
  },
]);

export default router;
