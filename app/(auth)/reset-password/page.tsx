import AuthFormLayout from "@/components/AuthFormLayout";

export default function ResetPasswordPage() {
  return (
    <AuthFormLayout
      title="Create New Password"
      description="Create a new password for your account."
    >
      <form className="mt-6 space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="new-password"
            className="text-sm font-medium text-gray-700"
          >
            New password
          </label>
          <input
            id="new-password"
            name="newPassword"
            type="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirm-password"
            className="text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#769FCD] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a91c1]"
        >
          Update password
        </button>
      </form>
    </AuthFormLayout>
  );
}
