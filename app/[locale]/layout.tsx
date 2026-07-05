import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n/config";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NoiseOverlay from "../../components/NoiseOverlay";
import "../globals.css";

const interBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGroteskDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDET Architecture & GenAI",
  description: "Portfolio of a Senior SDET and Automation Architect",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${interBody.variable} ${spaceGroteskDisplay.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-foreground font-sans relative">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
