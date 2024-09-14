import { api } from "../api";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: ({ email, phone }) => ({
        url: 'users/auth/send-otp',
        method: 'POST',
        body: {
          email,
          phone
        }
      })
    }),
    verifyOtp: build.mutation({
      query: ({ email, phone, birthDate, gender, password, otp }) => ({
        url: 'user/auth/verify-otp',
        method: 'POST',
        body: { email, phone, birthDate, gender, password, otp }
      })
    }),
    changePassword: build.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: 'user/auth/change-password',
        method: 'PUT',
        body: { oldPassword, newPassword }
      })
    }),
    forgotPassword: build.mutation({
      query: ({ email }) => ({
        url: 'user/auth/forgot-password',
        method: 'POST',
        body: { email }
      })
    }),
    forgotPasswordOtpConfrirm: build.mutation({
      query: ({ otp, email }) => ({
        url: 'user/auth/forgot-password-otp-confirm',
        method: 'POST',
        body: { otp, email }
      })
    }),
    forgotPasswordConfrirm: build.mutation({
      query: ({ otp, email, password }) => ({
        url: 'user/auth/forgot-password-confirm',
        method: 'POST',
        body: { otp, email, password }
      })
    }),
    authLogin: build.mutation({
      query: ({ email, password }) => ({
        url: 'user/auth/login',
        method: 'POST',
        body: {
          email,
          password
        }
      })
    }),
    getUser: build.query({
      query: () => ({
        url: 'user/auth/user',
        method: 'GET'
      })
    }),
    // uploadUserImage: () => ({
    //   url: 'user/auth/upload-image'
    // })
  })
})

export const {
  useSendOtpMutation,
  useAuthLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordConfrirmMutation,
  useForgotPasswordMutation,
  useForgotPasswordOtpConfrirmMutation,
  useGetUserQuery,
  useVerifyOtpMutation
} = authApi