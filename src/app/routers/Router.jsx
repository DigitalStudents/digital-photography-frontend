
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../../Pages/ProductDetail/ProductDetail";
import Home from "../../Pages/Home/Home";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import PageLayout from "../layouts/PageLayout";
import AdminLayout from "../layouts/AdminLayout";
import RegisterProduct from "../pages/Admin/RegisterProduct";
import ViewProduct from "../pages/Admin/ViewProduct";

export const Router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        path: "/",
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/categoria/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: '/admin/register-product',
          element: <RegisterProduct />
          },
          { path: '/admin/view-product',
          element: <ViewProduct />
          },
        ]
      }
    ],
  },
]);
