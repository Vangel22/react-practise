import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Dashboard } from "./components/Dashboard.jsx";
import { addUser, AddUser } from "./components/AddUser.jsx";
import { userLoader, UserPage } from "./pages/UserPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Landing page</h1>,
    // action
    // mutation
  },
  {
    path: "/user",
    element: <UserPage />,
    loader: userLoader,
  },
  {
    path: "/add-user",
    element: <AddUser />,
    action: addUser,
    // action -> adding a new user
  },
  {
    path: "/mutate-user",
    element: <AddUser />,
    // action: updateUser,
    // mutation
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={routes} />
  </StrictMode>
);
