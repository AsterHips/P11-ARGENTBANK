import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";


const store = configureStore({reducer: {user: userReducer}})

export default store;