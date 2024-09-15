import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../jwt';


// Create the API
export const instructorApi = createApi({
    reducerPath: 'instructorApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getInstructor: builder.query({
            query: () => 'instructors',
            providesTags: ['Instructor'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetInstructorQuery } = instructorApi;
