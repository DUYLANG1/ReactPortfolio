import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "styles/global.scss";
import Layout from "@/layout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingSpinner from "components/common/LoadingSpinner";
import { AppContextProvider } from "components/context/app.context";
import ErrorBoundary from "components/common/ErrorBoundary";
import "@/i18n";

// Lazy load pages
const HomePage = lazy(() =>
  import("pages/home").then((module) => ({ default: module.default }))
);
const ProjectPage = lazy(() => import("pages/project"));
const AboutPage = lazy(() => import("pages/about"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: (
          <ErrorBoundary
            fallback={
              <div className="text-center p-5">
                Something went wrong with the page. Please try refreshing.
              </div>
            }
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        ),
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "project",
            element: <ProjectPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
