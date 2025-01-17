import "@/styles/globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025</p>
      </footer>
    </>
  );
}
