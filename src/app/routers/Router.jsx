import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../../Pages/ProductDetail/ProductDetail";
import Home from "../../Pages/Home/Home";
import PageLayout from "../layouts/PageLayout";
import AdminLayout from "../layouts/AdminLayout";
import RegisterProduct from "../pages/Admin/RegisterProduct";
import ViewProduct from "../pages/Admin/ViewProduct";
import Login from "../pages/login/Login";

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
