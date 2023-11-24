import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "../pages/login/Auth";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home/Home";

const MainRouter = () => {
  return (
    <BrowserRouter>

        <PublicRouter />
        <Routes>
         <Route
          path="/*"
          
          element={
            <PrivateRouter>
              <PrivateRoutes />
            </PrivateRouter>
          }
        />
        <Route path="/" element={<Navigate to="/home"/>}></Route>
        
        </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
