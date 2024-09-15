import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { clearUser } from './slices/userSlice';
import { clearTokens, setTokens } from './slices/authSlice';

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await fetchBaseQuery({
        baseUrl: 'http://192.168.8.119:3000/api', // New base URL
        prepareHeaders: (headers, { getState }) => {
            const { accessToken } = getState().auth;
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`); // Set Bearer token
            }
            return headers;
        },
    })(args, api, extraOptions);

    if (result?.error?.status === 401) {
        const refreshToken = api.getState().auth.refreshToken;

        if (refreshToken) {
            const refreshResponse = await fetch('http://192.168.8.119:3000/api/users/auth/refresh-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: refreshToken }),
            });

            if (refreshResponse.ok) {
                const { accessToken: newAccessToken } = await refreshResponse.json();
                api.dispatch(setTokens({ accessToken: newAccessToken }));

                result = await fetchBaseQuery({
                    baseUrl: 'http://192.168.8.119:3000/api',
                    prepareHeaders: (headers) => {
                        headers.set('Authorization', `Bearer ${newAccessToken}`); // Use new Bearer token
                        return headers;
                    },
                })(args, api, extraOptions);
            } else {
                api.dispatch(clearTokens());
                api.dispatch(clearUser());
                // Optionally redirect to login page
            }
        } else {
            api.dispatch(clearTokens());
        }
    }

    return result;
};
