import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define baseQuery without token handling
const baseQueryWithReauth = fetchBaseQuery({
    baseUrl: 'http://192.168.8.119:3000/', // Your new base URL
});

// Create the API
export const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        sendOtp: builder.mutation({
            query: (formData) => ({
                url: 'api/users/auth/send-otp', // Updated endpoint
                method: 'POST',
                body: formData, // Assuming formData contains necessary OTP details
            }),
            invalidatesTags: ['OTP'], // Update if necessary
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

// Export the mutation hook
export const { useSendOtpMutation } = registerApi;