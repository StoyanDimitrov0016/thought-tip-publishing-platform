import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/utilities.css";

import router from "./router/router.tsx";
import { ROUTES } from "./router/routes.ts";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk publishable key missing!");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={ROUTES.HOME}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
