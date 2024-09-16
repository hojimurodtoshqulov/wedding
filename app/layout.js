import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/ofont.ru_Miama Nueva.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Montserrat-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Akmal-Kamila WEDDING",
  description: "All you need is love!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
