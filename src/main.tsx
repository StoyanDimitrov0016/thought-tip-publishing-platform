import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/reset.css";
import "./styles/typography.css";
// import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/global.css";

// LAYOUT STYLES
import "./styles/layouts/main-layout.css";
import "./styles/layouts/profile-layout.css";

// COMPONENT STYLES
import "./styles/components/header.css";
import "./styles/components/sidebar.css";

// PAGE STYLES
import "./styles/pages/home-page.css";
import "./styles/pages/register-login-pages.css";
import "./styles/pages/create-article-page.css";

import { SegmentationProvider } from "./contexts/segmentation.tsx";
import { AuthProvider } from "./contexts/authContext.tsx";

import router from "./router/router.tsx";

// TODO: Extract init to another file and set additional options if needed
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SegmentationProvider>
          <RouterProvider router={router} />
        </SegmentationProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
