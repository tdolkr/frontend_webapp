import type { ReactNode } from "react";

type AuthFormLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  variant?: "card" | "split";
  sideContent?: ReactNode;
  mainClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function AuthFormLayout({
  title,
  description,
  children,
  footer,
  variant = "card",
  sideContent,
  mainClassName,
  containerClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: AuthFormLayoutProps) {
  if (variant === "split" && sideContent) {
    return (
      <main
        className={
          mainClassName ??
          "min-h-screen bg-[#F5FAFF] flex items-center justify-center px-4 py-8"
        }
      >
        <div
          className={
            containerClassName ??
            "w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          }
        >
          {sideContent}
          <div
            className={
              contentClassName ?? "md:w-1/2 bg-[#F9FBFF] px-8 py-10"
            }
          >
            <h1
              className={
                titleClassName ??
                "text-3xl font-semibold text-[#769FCD] text-center"
              }
            >
              {title}
            </h1>
            {description && (
              <p
                className={
                  descriptionClassName ??
                  "mt-2 text-sm text-gray-500 text-center"
                }
              >
                {description}
              </p>
            )}
            {children}
            {footer}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className={
        mainClassName ?? "min-h-screen bg-white flex items-center justify-center px-4"
      }
    >
      <div
        className={
          containerClassName ??
          "w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm"
        }
      >
        <h1
          className={
            titleClassName ?? "text-2xl font-semibold text-[#769FCD]"
          }
        >
          {title}
        </h1>
        {description && (
          <p
            className={
              descriptionClassName ?? "mt-2 text-sm text-gray-500"
            }
          >
            {description}
          </p>
        )}
        {children}
        {footer}
      </div>
    </main>
  );
}
