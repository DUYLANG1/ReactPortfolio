import { lazy, Suspense } from "react";
import Layout from "@/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSpinner from "components/common/LoadingSpinner";
import { AppContextProvider } from "@/components/context/AppContent";
import ErrorBoundary from "components/common/ErrorBoundary";

// Lazy load pages
const HomePage = lazy(() => import("@/pages/Home"));
const ProjectPage = lazy(() => import("@/pages/Project"));
const AboutPage = lazy(() => import("@/pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "project", element: <ProjectPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

const App = () => (
  <AppContextProvider>
    <ErrorBoundary
      fallback={
        <div className="text-center p-5">
          Something went wrong. Please refresh.
        </div>
      }
    >
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </AppContextProvider>
);

export default App;
