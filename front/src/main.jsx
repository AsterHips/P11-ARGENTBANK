import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store.js";

// 
import { Provider, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, Route, Navigate } from "react-router-dom";
// 

import "./assets/css/style.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import User from "./pages/User/User.jsx";

// 

function PrivateRoute({ element: Component, isAuthenticated, ...rest }) {
    const user = useSelector((store) => store.user);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/signin" />}
    />
  );
}

// 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/user",
                element: <User />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
