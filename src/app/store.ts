import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "../services/MatchApi";

const store = configureStore({
    reducer: {
        [matchApi.reducerPath]: matchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchApi.middleware),
});

export default store;
