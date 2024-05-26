import React from "react";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ICON BOLD ROUNDED [BR]*/}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.3.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
        ></link>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
