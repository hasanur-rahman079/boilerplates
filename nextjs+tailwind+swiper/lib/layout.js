import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
