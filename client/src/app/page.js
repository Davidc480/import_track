import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import AboutUs from "@/Components/AboutUs/AboutUs";
import PromotionalBanner from "@/Components/PromotionalBanner/PromotionalBanner";
import Calculator from "@/Components/Calculator/Calculator";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10 ">
      <HeaderMobile />
      <AboutUs />
      <PromotionalBanner />
      <div id="calculator">
        <Calculator />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
