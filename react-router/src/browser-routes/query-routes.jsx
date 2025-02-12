import { Routes, Route, useSearchParams } from "react-router";

export const QueryRoutes = () => {
  const [searchParams] = useSearchParams();

  //   console.log("query", searchParams.get("name"));

  // order/1?status="done"

  //   console.log("query", Object.fromEntries(searchParams.entries()));

  return (
    <Routes>
      <Route path="/landing" element={<h1>Landing</h1>} />
    </Routes>
  );
};
