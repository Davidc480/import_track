import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import AboutUs from "@/Components/AboutUs/AboutUs";
import PromotionalBanner from "@/Components/PromotionalBanner/PromotionalBanner";
import Calculator from "@/Components/Calculator/Calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-20 ">
      <HeaderMobile />
      <AboutUs />
      <PromotionalBanner />
      <Calculator />
    </main>
  );
}
