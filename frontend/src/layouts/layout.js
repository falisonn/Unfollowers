import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutNavbar } from "./layoutNavbar";

export const Layout = () => {
    return (
        <div>
            <LayoutNavbar />
            <Outlet />
        </div>
    )
}