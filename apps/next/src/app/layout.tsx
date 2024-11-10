import type { Metadata } from "next";
import "./globals.css";
import { MDProvider } from "@nyanpasu/material-design-react";

export const metadata: Metadata = {
  title: "Nyanpasu Material You",
  description: "Nyanpasu creates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <MDProvider>{children}</MDProvider>
      </body>
    </html>
  );
}
