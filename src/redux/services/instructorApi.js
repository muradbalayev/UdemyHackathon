import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define baseQuery without token handling
const baseQueryWithReauth = fetchBaseQuery({
    baseUrl: 'http://192.168.8.119:3000/', // Your base URL
});


export const instructorApi = createApi({
    reducerPath: 'instructorApi', // Updated reducerPath
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: () => ({
                url: 'api/instructor/', // Updated endpoint
                method: 'GET',
            }),
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5,
});

export const { useLoginMutation } = loginApi;