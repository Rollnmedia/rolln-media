import "./globals.css";

export const metadata = {
  title: "Roll'n Media | Digital Growth Agency New Zealand",

  description:
    "Roll'n Media is a New Zealand digital growth agency helping businesses get found, get chosen and grow through web, SEO, paid advertising, strategy and automation.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Roll'n Media | Digital Growth Agency New Zealand",
    description:
      "Helping businesses get found, get chosen and grow through web, SEO, paid advertising, strategy and automation.",
    type: "website",
    locale: "en_NZ",
    siteName: "Roll'n Media",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roll'n Media | Digital Growth Agency New Zealand",
    description:
      "Helping businesses get found, get chosen and grow through web, SEO, paid advertising, strategy and automation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
