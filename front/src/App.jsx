import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./app.css";

import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";

import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/user.action";
import { toggleMode } from "./redux/actions/darkmode.action";
import Footer from "./components/Footer/Footer";

function App() {
    const darkmode = useSelector((store) => store.darkmode.theme);
    console.log(darkmode);

    const dispatch = useDispatch();

    return (
        <main className={`${darkmode ? "dark" : ""}`}>
            <Navigation />
            <Banner />
            <Features />
            {/* <button
                type="button"
                onClick={() =>
                    dispatch(
                        login({
                            token: "fvsdvsdfvdsf.dfvsdfv",
                            coco: "saucisse",
                        })
                    )
                }
            >
                TAPE MOI
            </button>
            <button type="button" onClick={() => dispatch(toggleMode())}>
                TAPE MOI PLUS FORT
            </button> */}
            <Footer />
        </main>
    );
}

export default App;
