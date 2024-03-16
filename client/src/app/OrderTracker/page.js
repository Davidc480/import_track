import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import Footer from "@/Components/Footer/Footer";
import OrderStatusTracker from "@/Components/OrderStatusTracker/OrderStatusTracker";
import ContadorCuentaRegresiva from "@/Components/Contador/Contador";

export default function OrderTracker() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-10 ">
      <HeaderMobile />
      <OrderStatusTracker />
      <ContadorCuentaRegresiva />
      <Footer />
    </main>
  );
}
