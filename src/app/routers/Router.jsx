
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Home from "../pages/Home/Home";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import PageLayout from "../layouts/PageLayout";
import AdminLayout from "../layouts/AdminLayout";
import RegisterProduct from "../pages/Admin/RegisterProduct";
import ViewProduct from "../pages/Admin/ViewProduct";
import Login from "../pages/login/Login";
import DigitalSLR from "../pages/Categories/Photography/DigitalSLR";

export const Router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login'
  },
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
      },
      {
        path:"/digitalSLR",
        element: <DigitalSLR/>
      }
    ],
  },
]);
