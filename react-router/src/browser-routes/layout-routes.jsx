import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";

export const LayoutRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<Layout />}>
        <Route path="home" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />
      </Route>
    </Routes>
  );
};
