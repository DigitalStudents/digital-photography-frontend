
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Home from "../pages/Home/Home";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import PageLayout from "../layouts/PageLayout";
import AdminLayout from "../layouts/AdminLayout";
import RegisterProduct from "../pages/Admin/RegisterProduct";
import ViewProduct from "../pages/Admin/ViewProduct";
import RegisterCategory from "../pages/Admin/RegisterCategory";
import ViewCategory from "../pages/Admin/ViewCategory";
import RegisterCaracteristica from "../pages/Admin/RegisterCaracteristica";
import RegisterInventory from "../pages/Admin/RegisterInventory";
import ViewCaracteristica from "../pages/Admin/ViewCaracteristica";
import RegisterReservation from "../pages/Admin/RegisterReservation";
import ViewReservation from "../pages/Admin/ViewReservation";
import RegisterUser from "../pages/Admin/RegisterUser";
import ViewUser from "../pages/Admin/ViewUser";
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
          { path: '/admin/register-category',
          element: <RegisterCategory />
          },
          { path: '/admin/view-category',
          element: <ViewCategory />
          },
          { path: '/admin/register-caracteristica',
          element: <RegisterCaracteristica />
          },
          { path: '/admin/view-caracteristica',
          element: <ViewCaracteristica />
          },
          { path: '/admin/register-inventory',
          element: <RegisterInventory/>
          },
          { path: '/admin/register-reservation',
          element: <RegisterReservation/>
          },
          { path: '/admin/view-reservation',
          element: <ViewReservation/>
          },
          { path: '/admin/register-user',
          element: <RegisterUser/>
          },
          { path: '/admin/view-user',
          element: <ViewUser/>
          },
        ]
      },
    ],
  },
]);
