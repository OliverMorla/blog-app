import { GlobalProvider } from "./context/GlobalContext";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const OpenSans = Open_Sans({
  preload: true,
  style: "normal",
  subsets: ["latin-ext"],
  weight: ["300", "400", "600", "800"],
});

export const metadata = {
  title: "Blog App - Home",
  description: "Just a simple blog app where you can read, write, learn and discover new things.",
  keywords: ["Blog", "Write", "Read", "Learn", "Discover", "Inspire"],
  author: "Oliver Morla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
