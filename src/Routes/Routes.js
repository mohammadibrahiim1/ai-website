import { createBrowserRouter } from "react-router-dom";
import Discover from "../Pages/Discover/Discover";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import SelectedProduct from "../Components/SelectedProduct/SelectedProduct";
// import AiProduct from "../Components/AiProduct/AiProduct";
import Favourites from "../Pages/Favourites/Favourites";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },

      {
        path: "/category/:category",
        element: <SelectedProduct></SelectedProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allproducts/${params.category}`),
      },
      {
        path: "/tool/:category",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allproducts/${params.category}`),
      },

      { path: "/favourite", element: <Favourites></Favourites> },
      { path: "/discover", element: <Discover></Discover> },
      { path: "/signin", element: <SignIn></SignIn> },
    ],
  },
]);
