import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Children from "./pages/Children";
import Fantasy from "./pages/Fantasy";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/children",
        element: <Children />,
      },
      {
        path: "/fantacy",
        element: <Fantasy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
