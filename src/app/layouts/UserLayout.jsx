import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useWindowSize } from "usehooks-ts";

const layoutClass = {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
};
const UserLayout = () => {
  return (
    <Fragment>
      <section style={layoutClass}>
        <div style={{ height: "100%" }}>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </Fragment>
  );
};

export default UserLayout;
