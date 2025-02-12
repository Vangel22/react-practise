import "./App.css";
import { CatchAllRoutes } from "./browser-routes/catch-all";
import { DynamicRoutes } from "./browser-routes/dynamic-routes";
import { LayoutRoutes } from "./browser-routes/layout-routes";
import { LazyRoutes } from "./browser-routes/lazy-routes";
import { NestedRoutes } from "./browser-routes/nested-routes";
import { ProtectedRoutes } from "./browser-routes/protected-routes";
import { StaticRoutes } from "./browser-routes/static-routes";
import { QueryRoutes } from "./browser-routes/query-routes";
import { UserList } from "./components/UserList";

function App() {
  // Lazy route -> loading spinner then HorizontalCard(View more)
  // Protected route - hide the HorizontalCard
  // when pushToken is not present
  // Nested routes - /post -> HorizontalCard ->  /post/wholepost

  return (
    <>
      {/* <h1>React router</h1> */}
      {/* <StaticRoutes /> */}
      {/* <DynamicRoutes /> */}
      {/* <CatchAllRoutes /> */}
      {/* <NestedRoutes /> */}
      {/* <LayoutRoutes /> */}
      {/* <ProtectedRoutes /> */}
      {/* <LazyRoutes /> */}
      <QueryRoutes />
    </>
  );
}

export default App;
