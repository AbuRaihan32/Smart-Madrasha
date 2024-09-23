import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Inter, Ubuntu } from "next/font/google";

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
  return (
    <html lang="en">
      <body>
        <main className={`${inter.className} ${ubuntu.className}`}>
          <nav className="z-50 sticky top-0">
            <Navbar></Navbar>
          </nav>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
