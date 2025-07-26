import { lazy, Suspense } from "react";
import Layout from "@/layout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingSpinner from "components/common/LoadingSpinner";
import { AppContextProvider } from "components/context/app.context";
import ErrorBoundary from "components/common/ErrorBoundary";

// Lazy load pages
const HomePage = lazy(() =>
  import("pages/home").then((module) => ({ default: module.default }))
);
const ProjectPage = lazy(() =>
  import("pages/project").then((module) => ({ default: module.default }))
);
const AboutPage = lazy(() =>
  import("pages/about").then((module) => ({ default: module.default }))
);

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

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
