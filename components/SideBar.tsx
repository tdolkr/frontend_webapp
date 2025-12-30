"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarRole = "visa-officer";

type SideBarItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

const sidebarItems: Record<SideBarRole, SideBarItem[]> = {
  "visa-officer": [
    {
      href: "/visa-officer/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 18 18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0ZM2 8H6V2H2V8ZM12 16H16V10H12V16ZM12 4H16V2H12V4ZM2 16H6V14H2V16Z"
          />
        </svg>
      ),
    },
    {
      href: "/visa-officer/student-list",
      label: "Student List",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 18 18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M5 14C5.28333 14 5.52083 13.9042 5.7125 13.7125C5.90417 13.5208 6 13.2833 6 13C6 12.7167 5.90417 12.4792 5.7125 12.2875C5.52083 12.0958 5.28333 12 5 12C4.71667 12 4.47917 12.0958 4.2875 12.2875C4.09583 12.4792 4 12.7167 4 13C4 13.2833 4.09583 13.5208 4.2875 13.7125C4.47917 13.9042 4.71667 14 5 14ZM5 10C5.28333 10 5.52083 9.90417 5.7125 9.7125C5.90417 9.52083 6 9.28333 6 9C6 8.71667 5.90417 8.47917 5.7125 8.2875C5.52083 8.09583 5.28333 8 5 8C4.71667 8 4.47917 8.09583 4.2875 8.2875C4.09583 8.47917 4 8.71667 4 9C4 9.28333 4.09583 9.52083 4.2875 9.7125C4.47917 9.90417 4.71667 10 5 10ZM5 6C5.28333 6 5.52083 5.90417 5.7125 5.7125C5.90417 5.52083 6 5.28333 6 5C6 4.71667 5.90417 4.47917 5.7125 4.2875C5.52083 4.09583 5.28333 4 5 4C4.71667 4 4.47917 4.09583 4.2875 4.2875C4.09583 4.47917 4 4.71667 4 5C4 5.28333 4.09583 5.5208 4.2875 5.7125C4.47917 5.90417 4.71667 6 5 6ZM8 14H14V12H8V14ZM8 10H14V8H8V10ZM8 6H14V4H8V6ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
          />
        </svg>

      ),
    },
    {
      href: "/visa-officer/documents",
      label: "Documents",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M0 5.45455V0H6V2.18182H2.4V5.45455H0ZM21.6 5.45455V2.18182H18V0H24V5.45455H21.6ZM0 24V18.5455H2.4V21.8182H6V24H0ZM18 24V21.8182H21.6V18.5455H24V24H18ZM6 18.5455H18V5.45455H6V18.5455ZM6 20.7273C5.34 20.7273 4.775 20.5136 4.305 20.0864C3.835 19.6591 3.6 19.1455 3.6 18.5455V5.45455C3.6 4.85455 3.835 4.34091 4.305 3.91364C4.775 3.48636 5.34 3.27273 6 3.27273H18C18.66 3.27273 19.225 3.48636 19.695 3.91364C20.165 4.34091 20.4 4.85455 20.4 5.45455V18.5455C20.4 19.1455 20.165 19.6591 19.695 20.0864C19.225 20.5136 18.66 20.7273 18 20.7273H6ZM8.4 9.81818H15.6V7.63636H8.4V9.81818ZM8.4 13.0909H15.6V10.9091H8.4V13.0909ZM8.4 16.3636H15.6V14.1818H8.4V16.3636Z"
          />
        </svg>

      ),
    },
  ],
};

export default function SideBar({ role }: { role: SideBarRole }) {
  const pathname = usePathname();
  const items = sidebarItems[role];

  return (
    <aside className="w-64 bg-white min-h-screen border-r border-gray-100 px-6 py-8 shadow-lg">
      <div className="mb-10 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-blue-200" />
        <span className="text-xl font-semibold text-blue-400">agentzee</span>
      </div>

      <nav className="space-y-3">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const iconColorClass = isActive
            ? "text-[#769FCD]"
            : "text-[#B9D7EA]";
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-gray-100"
            >
              <span className={iconColorClass}>{item.icon}</span>
              <span className="text-base font-medium text-gray-700">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
