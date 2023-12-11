import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useWindowSize } from "usehooks-ts";

const layoutClass = {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
};
const AdminLayout = () => {
  const { width } = useWindowSize();
  const name = sessionStorage.getItem('firstName')
  return (
    <Fragment>
      {width >= 1024 ? (
        <section style={layoutClass}>
          <div style={{ height: "100%" }}>
            <Sidebar name={name} />
          </div>
          <div style={{height:"100vh"}}>
            <Outlet />
          </div>
        </section>
      ) : (
        <h1>NO DISPONIBLE</h1>
      )}
    </Fragment>
  );
};

export default AdminLayout;
