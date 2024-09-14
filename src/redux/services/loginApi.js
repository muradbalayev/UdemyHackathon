import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define baseQuery without token handling
const baseQueryWithReauth = fetchBaseQuery({
    baseUrl: 'http://192.168.8.119:3000/', // Your base URL
});

// Create the API
export const loginApi = createApi({
    reducerPath: 'loginApi', // Updated reducerPath
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (formData) => ({
                url: 'api/users/auth/login', // Updated endpoint
                method: 'POST',
                body: formData, // Assuming formData contains necessary login details
            }),
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5,
});

// Export the mutation hook
export const { useLoginMutation } = loginApi;
