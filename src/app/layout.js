import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import AOSInitializer from "@/components/AOSInitializer/AOSInitializer";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

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
    <html lang="en" data-theme="light">
      <body className='bg-white text-black'>
        <AOSInitializer />
        <main className={`${inter.className} ${ubuntu.className}`}>
          <nav className="z-50 sticky top-0">
            <Navbar />
          </nav>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
