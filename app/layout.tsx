import React from "react";
import "@/app/ui/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}

// import React from "react";
// import "@/app/ui/globals.css";
// import Navbar from "@/app/components/navbar";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html>
//       <Navbar />
//       <body>{children}</body>
//     </html>
//   );
// }
