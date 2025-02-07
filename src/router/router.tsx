import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";

import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/article/ArticlePage";
import AuthorPage from "../pages/author/AuthorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateArticlePage from "../pages/CreateArticlePage";

import MyArticles from "../pages/profile/MyArticles";
import MyBookmarks from "../pages/profile/MyBookmarks";
import MyDetails from "../pages/profile/MyDetails";

import { PATHS } from "../config/paths";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.ARTICLE,
        element: <ArticlePage />,
      },
      {
        path: PATHS.AUTHOR,
        element: <AuthorPage />,
      },
      {
        element: <GuestGuard />,
        children: [
          { path: PATHS.LOGIN, element: <LoginPage /> },
          { path: PATHS.REGISTER, element: <RegisterPage /> },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          { path: PATHS.CREATE_ARTICLE, element: <CreateArticlePage /> },
          {
            path: PATHS.MY_PROFILE,
            element: <ProfileLayout />,
            children: [
              { index: true, element: <Navigate to={PATHS.MY_PROFILE_MY_ARTICLES} replace /> },
              {
                path: PATHS.MY_PROFILE_MY_ARTICLES,
                element: <MyArticles />,
              },
              {
                path: PATHS.MY_PROFILE_MY_BOOKMARKS,
                element: <MyBookmarks />,
              },
              {
                path: PATHS.MY_PROFILE_MY_DETAILS,
                element: <MyDetails />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
