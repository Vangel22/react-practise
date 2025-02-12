import { Route, Routes } from "react-router";
import { User } from "../components/User";
import { UserList } from "../components/UserList";

const DynamicRoutes = () => {
  return (
    <Routes>
      {/* This is static route */}
      <Route path="/users" element={<UserList />} />
      {/* This is dynamic route */}
      <Route path="/users/:id" element={<User />} />
      {/* Yes you can use multiple params using :<your-param-name> */}
      {/* <Route path="/users/:id/:test" element={<User />} /> */}
    </Routes>
  );
};

export { DynamicRoutes };
