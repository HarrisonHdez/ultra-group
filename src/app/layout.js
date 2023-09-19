import "./globals.css";
import "src/app/normalize.css";

import { Poppins } from "next/font/google";

export const metadata = {
  title: "Ultra Group",
  description: "Generated by Next.js",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "500"],
  styles: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
