import { createBrowserRouter } from "react-router-dom";
// import Discover from "../Pages/Discover/Discover";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import SelectedProduct from "../Components/SelectedProduct/SelectedProduct";
// import Favourites from "../Pages/Favourites/Favourites";
import Home from "../Pages/Home/Home";
// import Root from "../Root/Root";
import Root from "../Layout/Root/Root";
// import SignIn from "../Pages/SignIn/SignIn";
// import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
// import Recent from "../Components/Recent/Recent";
// import Tools from "../Pages/Tools/Tools";
// import { BsTools } from "react-icons/bs";
import FavouriteLayout from "../Layout/Root/FavouriteLayout/FavouriteLayout";
import FTools from "../Components/FTools/FTools";
// import News from "../Components/News/News";
import Newes from "../Components/Newes/Newes";

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
    ],
  },

  {
    path: "/favourite",
    element: <FavouriteLayout></FavouriteLayout>,
    children: [
      {
        path: "/favourite",
        element: <FTools></FTools>,
      },
      {
        path: "/favourite/apps",
        element: <FTools></FTools>,
      },
      {
        path: "/favourite/news",
        element: <Newes></Newes>,
      },
    ],
  },
]);
