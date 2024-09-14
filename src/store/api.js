import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://192.168.8.119:3000/api/',
  // prepareHeaders: (headers, { getState }) => {
  //   const { token } = (getState()).app;
  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const api = createApi({
  tagTypes: [],
  baseQuery,
  reducerPath: 'api',
  endpoints: () => ({}),
});
