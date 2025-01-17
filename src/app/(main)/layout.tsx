import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {children}
    </>
  );
}
