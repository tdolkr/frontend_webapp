const BASE_URL = "https://edu-agent-backend-bplxyxizo-dendups-projects.vercel.app/api/auth";

// Send OTP
export const sendOTP = async (email) => {
  const res = await fetch(
    `${BASE_URL}/send-otp`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to send OTP");
  }

  return data;
};
