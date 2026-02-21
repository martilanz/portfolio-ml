import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Providers from "./provider";
import Navbar from "@/components/layout/Navbar";
import FooterServer from "@/components/layout/Footer";
import {NextIntlClientProvider} from 'next-intl';


export const metadata = {
  title: "Martina Lanzillo | Software Developer",
  description: "Software Developer portfolio",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <NextIntlClientProvider>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
