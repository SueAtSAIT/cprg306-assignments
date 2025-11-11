import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthContextProvider } from "./contexts/AuthContext.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopping List",
  description: "Prepared for CPRG306-A",
};
// can't have two export default functions in the same component so adding AuthContextProvider to the existing RootLayout based on parsing errors...
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
