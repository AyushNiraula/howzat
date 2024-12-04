import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "../services/MatchApi";
import { rankingApi } from "../services/RankingApi";

const store = configureStore({
    reducer: {
        [matchApi.reducerPath]: matchApi.reducer,
        [rankingApi.reducerPath]:rankingApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchApi.middleware, rankingApi.middleware),
});

export default store;
