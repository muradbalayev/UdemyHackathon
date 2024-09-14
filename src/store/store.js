import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { api } from "./api";
import { registerApi } from "../redux/services/registerApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { verifyOtpApi } from "../redux/services/verifyOtpApi";
import { loginApi } from "../redux/services/loginApi";

const reducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [api.reducerPath]: api.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [verifyOtpApi.reducerPath]: verifyOtpApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,

});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(registerApi.middleware)
      .concat(verifyOtpApi.middleware)
      .concat(loginApi.middleware),
});

setupListeners(store.dispatch)