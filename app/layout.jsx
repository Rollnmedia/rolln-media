import "./globals.css";

export const metadata = {
  title: "Roll’n Media | Digital Growth Agency",
  description:
    "Roll’n Media helps New Zealand businesses turn attention into measurable digital growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
