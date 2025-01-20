import React from "react";

export const metadata = {
  title: "Kaizen - Dashboard",
  description: "Kaizen Dashboard page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
