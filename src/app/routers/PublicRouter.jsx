import React, { Fragment } from "react";
import Auth from "../pages/login/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageLayout from "../layouts/PageLayout";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import UserLayout from "../layouts/UserLayout";
import FavsProducts from "../pages/User/FavsProducts";
import UserProfile from "../pages/User/UserProfile";
import { NotAdminAuthenticated } from "./PrivateRouter";
import ReservationDetail from "../pages/ReservationDetail/ReservationDetail";
import UserReservations from "../pages/User/UserReservations";
import ReservationConfirm from "../pages/ReservationConfirm/ReservationConfirm";

const PublicRouter = () => {
  const isAuth =
    sessionStorage.getItem("token") &&
    sessionStorage.getItem("username") &&
    "USER" === sessionStorage.getItem("role");
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/user" element={<UserLayout />}>
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/favorites" element={<FavsProducts />} />
          <Route path="/user/reservations" element={<UserReservations/>} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/:productId/reservationDetail" element={<ReservationDetail/>} />
        <Route path="/reservationConfirm" element={<ReservationConfirm />} />
        <Route path="/categoria/:categoryId" element={<CategoryPage />} />
      </Route>

      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default PublicRouter;
