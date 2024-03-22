import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import Footer from "@/Components/Footer/Footer";
import NextOrdersCounter from "@/Components/NextOrdersCounter/NextOrdersCounter";

export default function nextOrder() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10 ">
      <HeaderMobile />
      <NextOrdersCounter />
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
