import '@/styles/globals.css';
import localFont from 'next/font/local'
import React from "react";
import type { Metadata } from 'next';

const myFont = localFont({
  src: '../../public/fonts/CaskaydiaCoveNerdFont.ttf'
});

export const metadata: Metadata = {
  title: "Kaizen",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
