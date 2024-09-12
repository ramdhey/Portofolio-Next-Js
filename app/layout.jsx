import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTrasition from "@/components/StairTransition";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plusJakartaSans",
});

export const metadata = {
  title: "ramdhey.tech",
  description: "Ramdhe Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={plusJakartaSans.variable}>
        <Header />
        <StairTrasition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
