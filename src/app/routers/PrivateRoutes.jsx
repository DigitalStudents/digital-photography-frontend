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

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>

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
        <Route
          path="/register-inventory"
          element={<RegisterInventory />}
        />
        <Route
          path="/register-reservation"
          element={<RegisterReservation />}
        />
        <Route path="/view-reservation" element={<ViewReservation />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/view-user" element={<ViewUser />} />
      </Route>
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
