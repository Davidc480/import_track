import HeaderMobile from "@/Components/HeaderMobile/HeaderMobile";
import AboutUs from "@/Components/AboutUs/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="">
        <div>
          <HeaderMobile />
        </div>
        <div className="flex justify-center items-center">
          <AboutUs />
        </div>
      </div>
    </main>
  );
}
