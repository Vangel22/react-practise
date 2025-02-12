import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="home">Home</Link> |<Link to="about">About</Link> |
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};
