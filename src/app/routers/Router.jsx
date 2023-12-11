
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
import Auth from "../pages/login/Auth";
import RegisterReservation from "../pages/Admin/RegisterReservation";
import ViewReservation from "../pages/Admin/ViewReservation";
import RegisterUser from "../pages/Admin/RegisterUser";
import ViewUser from "../pages/Admin/ViewUser";
import UserLayout from "../layouts/UserLayout";
import UserProfile from "../pages/User/UserProfile";
import FavsProducts from "../pages/User/FavsProducts";
import ReservationDetail from "../pages/ReservationDetail/ReservationDetail";
import UserReservations from "../pages/User/UserReservations";
import ReservationConfirm from "../pages/ReservationConfirm/ReservationConfirm";
//import Login from "../pages/login/Login";


export const Router = createBrowserRouter([
  {
    element: <Auth />,
    path: '/login'
  },
  {
    element: <Auth />,
    path: '/register'
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
        path:"/product/:productId/reservationDetail",
        element: <ReservationDetail />
      },
      {
        path:"/reservationConfirm",
        element: <ReservationConfirm />
      },
      {
        path: "/categoria/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: '',
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
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path:'/user/profile',
            element: <UserProfile />
          },
          {
            path:'/user/favorites',
            element: <FavsProducts />
          },
          {
            path:'/user/reservations',
            element: <UserReservations />
          }
        ]
      },

    ],
  },
]);
