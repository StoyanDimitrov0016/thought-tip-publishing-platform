import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/utilities.css";

import { AuthProvider } from "./contexts/authContext.tsx";
import router from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
