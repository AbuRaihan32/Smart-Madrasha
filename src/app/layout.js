import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import AOSInitializer from "@/components/AOSInitializer/AOSInitializer";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Router } from "@/components/Shared/Router";

const inter = Inter({ subsets: ["latin"] });

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biddyanoy",
  description: "Educational institution management service",
};

export default function RootLayout({ children }) {
  const isErrorPage = Router.pathname === "/not-found";

  return (
    <html lang="en">
      <body>
        <AOSInitializer />
        <main className={`${inter.className} ${ubuntu.className}`}>
          {isErrorPage && (
            <nav className="z-50 sticky top-0">
              <Navbar />
            </nav>
          )}
          {children}
          {isErrorPage && <Footer />}
        </main>
      </body>
    </html>
  );
}
