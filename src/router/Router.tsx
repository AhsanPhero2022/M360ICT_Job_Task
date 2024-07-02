import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ProductDetail from "../components/pages/ProductDetails";
import EditProduct from "../components/pages/EditeProduct";
import CategoryList from "../components/pages/Categories/CategoryList";
import CategoryProducts from "../components/pages/Categories/CategoryProducts";
import LoginPage from "../components/shared/Login";
import ProductsSample from "../components/pages/AllProducts/ProductsSample";
import Register from "../components/shared/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProducts",
        element: <ProductsSample />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/editProduct/:id",
        element: <EditProduct />,
      },
      {
        path: "/categoryList",
        element: <CategoryList />,
      },
      {
        path: "/category/:slug",
        element: <CategoryProducts />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
