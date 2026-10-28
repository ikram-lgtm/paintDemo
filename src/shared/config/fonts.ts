import localFont from "next/font/local";

export const nourd = localFont({
  src: [
    {
      path: "../assets/fonts/nourd_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/nourd_medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/nourd_semi_bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/nourd_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/nourd_heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nourd",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});
