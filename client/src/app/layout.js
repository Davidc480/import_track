import { Playfair_Display, Roboto, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-raleway",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-playfair-display",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Impor Track",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} ${raleway.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
