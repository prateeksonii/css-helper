import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "CSS Helper",
  description: "A collection of css helpers",
};

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} p-4 md:p-0 md:py-8 mx-auto container`}
    >
      <body>{children}</body>
    </html>
  );
}
