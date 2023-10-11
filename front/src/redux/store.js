import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { darkmodeReducer} from './reducers/darkmode.reducer';


const store = configureStore({reducer: {user: userReducer, darkmode: darkmodeReducer}})

export default store;