import { NavLink, NavLinkProps } from "react-router-dom";

const CustomNavLink = (props: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => `nav-link ${isActive ? "active-nav" : ""}`}
    />
  );
};

export default CustomNavLink;
