import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define baseQuery without token handling
const baseQueryWithReauth = fetchBaseQuery({
  baseUrl: 'http://192.168.8.119:3000/', // Your base URL
});

// Create the API
export const coursesApi = createApi({
  reducerPath: 'coursesApi', // Updated reducerPath
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => ({
        url: 'api/users/course/courses', // Updated endpoint
        method: 'GET',
      }),
    }),
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: 5,
});

// Export the mutation hook
export const { useGetCoursesQuery } = coursesApi;
