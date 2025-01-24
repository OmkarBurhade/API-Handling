import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/ConterSlice";
import logger from "../middleware/Logger";
import apiLogger from "../middleware/Apilogger";
import ApiSLiceReducer from "../slice/ApiSLice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        api: ApiSLiceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, apiLogger),
})

export default store;