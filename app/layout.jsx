import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Roll'n Media — Digital Growth That Actually Moves",
  description:
    "Roll'n Media builds digital growth systems through strategy, technology, marketing and AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
