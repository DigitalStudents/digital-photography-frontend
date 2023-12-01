import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import RegisterProduct from "../pages/Admin/RegisterProduct";
import ViewProduct from "../pages/Admin/ViewProduct";
import RegisterCategory from "../pages/Admin/RegisterCategory";
import ViewCategory from "../pages/Admin/ViewCategory";
import RegisterCaracteristica from "../pages/Admin/RegisterCaracteristica";
import ViewCaracteristica from "../pages/Admin/ViewCaracteristica";
import RegisterInventory from "../pages/Admin/RegisterInventory";
import ViewReservation from "../pages/Admin/ViewReservation";
import RegisterReservation from "../pages/Admin/RegisterReservation";
import RegisterUser from "../pages/Admin/RegisterUser";
import ViewUser from "../pages/Admin/ViewUser";
import PageLayout from "../layouts/PageLayout";
import UserLayout from "../layouts/UserLayout";
import FavsProducts from "../pages/User/FavsProducts";
import UserProfile from "../pages/User/UserProfile";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/register-product" element={<RegisterProduct />} />
        <Route path="/admin/view-product" element={<ViewProduct />} />
        <Route path="/admin/register-category" element={<RegisterCategory />} />
        <Route path="/admin/view-category" element={<ViewCategory />} />
        <Route
          path="/admin/register-caracteristica"
          element={<RegisterCaracteristica />}
        />
        <Route
          path="/admin/view-caracteristica"
          element={<ViewCaracteristica />}
        />
        <Route
          path="/admin/register-inventory"
          element={<RegisterInventory />}
        />
        <Route
          path="/admin/register-reservation"
          element={<RegisterReservation />}
        />
        <Route path="/admin/view-reservation" element={<ViewReservation />} />
        <Route path="/admin/register-user" element={<RegisterUser />} />
        <Route path="/admin/view-user" element={<ViewUser />} />
      </Route>
      <Route path="/user" element={<UserLayout/>}>
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/favorites" element={<FavsProducts/>} />
      </Route>
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
