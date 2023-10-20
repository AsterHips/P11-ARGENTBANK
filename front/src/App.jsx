import { useState } from "react";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/user.action";
import { toggleMode } from "./redux/actions/editmode.action";
import { Outlet, useLocation } from "react-router";


function App() {
    // const currentPage = useLocation().pathname;
    const editmode = useSelector((store) => store.editmode.edit);
    console.log(editmode);
    // console.log(currentPage)

    const dispatch = useDispatch();

    return (
        // <main className={`${darkmode ? "dark" : ""}`}>
        <main className="main-content">
            <Navigation />
            <Outlet />
            <Footer />
        </main>
    );
}

export default App;
