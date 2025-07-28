import { Outlet } from "react-router-dom";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import ScrollProgress from "./components/layout/ScrollProgress";

function Layout() {
  return (
    <div>
      <AppHeader />
      <ScrollProgress />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}

export default Layout;
