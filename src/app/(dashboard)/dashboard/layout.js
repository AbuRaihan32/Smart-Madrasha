import Header from "@/components/Dashboard/Shared/Header";
import Sidebar from "@/components/Dashboard/Shared/Sidebar";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <nav className="z-50 sticky top-0">
        <Header></Header>
        <Sidebar></Sidebar>
      </nav>
      <div className="w-5/6 absolute right-0 top-20 p-10 overflow-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
