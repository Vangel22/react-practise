import { Routes, Route } from "react-router";

export const CatchAllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing</h1>} />
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="*" element={<h1>Route not found</h1>} />
    </Routes>
  );
};
