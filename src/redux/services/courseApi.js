import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../jwt';

// Create the API
export const courseApi = createApi({
    reducerPath: 'courseApi', // Updated reducerPath
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (formData) => ({
                url: 'instructors/course/create', // Updated endpoint
                method: 'POST',
                body: formData, // Assuming formData contains necessary login details
            }),
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5,
});

// Export the mutation hook
export const { useCreateCourseMutation } = courseApi;
