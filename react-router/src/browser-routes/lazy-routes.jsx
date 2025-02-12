import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

// Normal import
// import { Dashboard } from "../components/Dashboard";
// Lazy import
const Home = lazy(() => import("../pages/Home"));

export const LazyRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
