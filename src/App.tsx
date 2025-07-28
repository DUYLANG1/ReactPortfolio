import { lazy, Suspense } from "react";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingSpinner from "components/common/LoadingSpinner";
import { AppContextProvider } from "./components/context/AppContent";
import ErrorBoundary from "components/common/ErrorBoundary";

// Lazy load pages
const HomePage = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.default }))
);
const ProjectPage = lazy(() =>
  import("./pages/Project").then((module) => ({ default: module.default }))
);
const AboutPage = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.default }))
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
