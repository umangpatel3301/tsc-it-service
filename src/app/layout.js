import localFont from "next/font/local";
import "./globals.css";
import Header from "@/containers/header/Header";
import Footer from "@/containers/footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const satoshi = localFont({
  src: "../../public/satoshi-variable.woff2",
  variable: "--font-satoshi",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
