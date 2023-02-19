import { createBrowserRouter } from "react-router-dom";
import Favourites from "../Pages/Favourites/Favourites";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },

      { path: "/favourite", element: <Favourites></Favourites> },
      
    ],
  },
]);
