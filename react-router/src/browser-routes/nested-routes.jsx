import { Routes, Route } from "react-router";
import { Dashboard } from "../components/Dashboard";

export const NestedRoutes = () => {
  return (
    <Routes>
      {/* Nested/Layout and they should use <Outlet /> to display their children routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>
    </Routes>
  );
};
