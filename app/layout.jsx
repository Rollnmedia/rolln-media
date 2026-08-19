import "./globals.css";

export const metadata = {
  title: "Roll’n Media",
  description: "Digital Growth Agency · New Zealand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
