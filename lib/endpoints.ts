import { get } from "http";

export const ENDPOINTS = {
  auth: {
    signupSendOtp: "/api/v1/agency/send-otp",
    login: "/api/v1/agency/login",
    verifyEmailOtp: "/api/v1/agency/verify-otp",
    resendEmailOtp: "/api/v1/agency/resend-otp",
    passwordResetSendOtp: "/api/v1/agency/password-reset/send-otp",
    passwordResetVerifyOtp: "/api/v1/agency/password-reset/verify-otp",
    passwordResetSetNew: "/api/v1/agency/password-reset/set-new",
    getProfile: "/api/v1/agency/profile",

  },
};
