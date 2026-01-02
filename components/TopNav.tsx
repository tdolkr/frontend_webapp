"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoints";

export default function TopNav() {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1];

      if (!token) {
        return;
      }

      try {
        const data = await api(ENDPOINTS.auth.getProfile, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileName =
          data?.profile?.name ||
          data?.user?.name ||
          data?.name ||
          data?.profile?.organizationName ||
          "";
        if (profileName) {
          setName(profileName);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadProfile();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="flex items-center border-b border-gray-100 bg-white px-6 py-4">
      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          className="relative text-gray-500 hover:text-gray-700"
          aria-label="Notifications"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6V11a6 6 0 0 0-12 0v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-50"
            onClick={() => setIsOpen((current) => !current)}
            aria-haspopup="menu"
            aria-expanded={isOpen}
          >
            <div className="h-8 w-8 rounded-full bg-[#B9D7EA]" />
            <span className="text-sm font-medium text-gray-700">
              {name || "User"}
            </span>
            <svg
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>

          {isOpen ? (
            <div className="absolute right-0 mt-2 w-40 rounded-xl border border-gray-100 bg-white py-2 text-sm text-gray-700 shadow-lg">
              <button
                type="button"
                className="w-full px-4 py-2 text-left hover:bg-gray-50"
              >
                Profile
              </button>
              
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                onClick={() => {
                  sessionStorage.removeItem("userName");
                  document.cookie =
                    "accessToken=; Path=/; Max-Age=0; SameSite=Lax";
                  router.push("/login");
                }}
              >
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
