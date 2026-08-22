import "./globals.css";

export const metadata = {
  title: {
    default: "Roll’n Media | Digital Growth Agency · New Zealand",
    template: "%s | Roll’n Media",
  },

  description:
    "Roll’n Media is a New Zealand digital growth agency helping businesses get found, get chosen and grow through strategy, web, SEO, paid media and automation.",

  keywords: [
    "digital growth agency New Zealand",
    "digital marketing agency New Zealand",
    "SEO agency New Zealand",
    "web design New Zealand",
    "Google Ads New Zealand",
    "digital marketing Auckland",
    "Roll’n Media",
  ],

  authors: [{ name: "Roll’n Media" }],
  creator: "Roll’n Media",
  publisher: "Roll’n Media",

  metadataBase: new URL("https://rolln.media"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Roll’n Media | Digital Growth Agency · New Zealand",
    description:
      "We help businesses get found, get chosen and grow through strategy, web, SEO, paid media and automation.",
    url: "https://rolln.media",
    siteName: "Roll’n Media",
    type: "website",
    locale: "en_NZ",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roll’n Media | Digital Growth Agency · New Zealand",
    description:
      "Digital growth through strategy, web, SEO, paid media and automation.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}
