import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import AboutUs from "@/Components/AboutUs/AboutUs";
import PromotionalBanner from "@/Components/PromotionalBanner/PromotionalBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeaderMobile /> {/* Se muestra en la parte superior */}
      <AboutUs /> {/* Se muestra centrado verticalmente en el medio */}
      <PromotionalBanner />
    </main>
  );
}
