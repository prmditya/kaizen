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
      <main className="px-[30px] md:px-[300px] text-left h-screen py-[100px]">{children}</main>
    </>
  );
}
