import "./globals.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import React from "react";

import Header from "@/components/header/Header";

const outfit = Outfit({
    weight: "200",
    subsets: ["latin", "latin-ext"],
    style: "normal",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Alan Akbik - Professor of Machine Learning",
    description: "I'm a professor of machine learning at Humboldt University of Berlin, specializing in natural " +
        "language processing (NLP) and leading the development of the Flair NLP framework.",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="text-[20px] xl:text-[24px]">
            <body className={`${outfit.className} antialiased`}>
                <Header/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
