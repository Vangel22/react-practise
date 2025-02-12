import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";

const StaticRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<h1>About page</h1>} />
      <Route path="/contact" element={<h1>Contact page</h1>} />
    </Routes>
  );
};

export { StaticRoutes };
