import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Detail = lazy(() => import("./pages/Detail/Detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:city",
    element: <Detail />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
