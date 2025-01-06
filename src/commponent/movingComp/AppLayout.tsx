// import { Link } from "react-router"
// import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const AppLayout = () => {
    return (<>
        <h1 >AppLayout </h1>
        <div style={{ border: "2px solide blue" }}>
        <NavBar />
        </div>

        <div style={{ border: "4px solide red",backgroundColor:"blueviolet" }}>
            <Outlet />
        </div>
    </>)
}

export default AppLayout





