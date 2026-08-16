import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Roll'n Media — Digital Growth That Actually Moves",
  description:
    "Web development, SEO, performance marketing, automation and AI systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
