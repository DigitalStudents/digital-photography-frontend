import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import UserReservations from "../pages/User/UserReservations";

const PrivateRoutes = () => {
  const isAdmin = "ADMIN" === sessionStorage.getItem("role");

  return (
    <Routes>
      <Route element={<PageLayout />}>
        {isAdmin ? (
          <Route path="/" element={<AdminLayout />}>
            <Route path="/register-product" element={<RegisterProduct />} />
            <Route path="/view-product" element={<ViewProduct />} />
            <Route path="/register-category" element={<RegisterCategory />} />
            <Route path="/view-category" element={<ViewCategory />} />
            <Route
              path="/register-caracteristica"
              element={<RegisterCaracteristica />}
            />
            <Route
              path="/view-caracteristica"
              element={<ViewCaracteristica />}
            />
            <Route path="/register-inventory" element={<RegisterInventory />} />
            <Route
              path="/register-reservation"
              element={<RegisterReservation />}
            />
            <Route path="/view-reservation" element={<ViewReservation />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/view-user" element={<ViewUser />} />
          </Route>
        ) : (
          <Route path="/user" element={<UserLayout />}>
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/favorites" element={<FavsProducts />} />
            <Route path="/user/reservations" element={<UserReservations/>} />
          </Route>
        )}
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
