import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AppLayout from "./layouts/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";

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
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* inject store to app using Provider */}
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
