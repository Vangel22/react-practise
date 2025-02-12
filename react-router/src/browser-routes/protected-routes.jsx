import { Routes, Route, Navigate, Outlet } from "react-router";

const useAuth = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (token) return true;
  return false;
};

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// landing
// login
// Auth -> home, dashboard

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>
    </Routes>
  );
};
