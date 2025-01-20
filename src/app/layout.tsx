import '@/styles/globals.css';
import localFont from 'next/font/local'
import React from "react";
import type { Metadata } from 'next';

const myFont = localFont({
  src: '../../public/fonts/CaskaydiaCoveNerdFont.ttf'
});

export const metadata: Metadata = {
  title: "Kaizen",
  icons: {
    icon: '/icons/favicon.ico',
  }
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
