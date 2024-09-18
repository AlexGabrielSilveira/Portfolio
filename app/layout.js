import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header/Header";


const pixel = localFont({
  src: "../public/fonts/pixel.otf",
  variable: "--font-pixel",
  weight: "100 900",
});

export const metadata = {
  title: "Alex Gabriel",
  description: "Sinta-se a vontade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${pixel.variable} ${pixel.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
