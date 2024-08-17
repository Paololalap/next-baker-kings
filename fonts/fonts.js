import { Salsa, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const salsa = Salsa({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-salsa",
});
