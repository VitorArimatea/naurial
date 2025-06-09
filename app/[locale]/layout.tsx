import type { Metadata } from "next";

import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Naurial",
  description: "Real-time AI Teaching Platform",
};

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${bricolage.variable} antialiased`}>
        <NextIntlClientProvider>
          <ClerkProvider
            appearance={{ variables: { colorPrimary: "#005ca8" } }}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
