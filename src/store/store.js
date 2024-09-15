import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { registerApi } from "../redux/services/registerApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { verifyOtpApi } from "../redux/services/verifyOtpApi";
import { loginApi } from "../redux/services/loginApi";
import userReducer from "../redux/slices/userSlice";
import authSlice from "../redux/slices/authSlice";
import { coursesApi } from "../redux/services/courseApi";

const reducers = combineReducers({
  user: userReducer,
  auth: authSlice,
  [registerApi.reducerPath]: registerApi.reducer,
  [verifyOtpApi.reducerPath]: verifyOtpApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [coursesApi.reducerPath]: coursesApi.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(registerApi.middleware)
      .concat(verifyOtpApi.middleware)
      .concat(loginApi.middleware)
      .concat(coursesApi.middleware)
});

setupListeners(store.dispatch)