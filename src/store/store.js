import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { api } from "./api";

const reducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
});