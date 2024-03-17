import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import Footer from "@/Components/Footer/Footer";
import ContadorCuentaRegresiva from "@/Components/Contador/Contador";

export default function nextOrder() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10 ">
      <HeaderMobile />
      <ContadorCuentaRegresiva />
      <Footer />
    </main>
  );
}
