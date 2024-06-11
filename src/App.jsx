import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AppLayout from "./layouts/AppLayout";

// 1. create routes using createBrowserRouter
// 2. send router variable to RouterProvider

// one of way to write routes
const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement - if any error occurs in children
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cart", // slug - can be anaything, anything can come up
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
