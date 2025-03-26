import { Outlet } from "react-router-dom";
import AppHeader from "./components/layout/app.header";
import AppFooter from "./components/layout/app.footer";
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
