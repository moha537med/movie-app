import "./globals.css";
import { FavoritesProvider } from "@/Components/FavoritesContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Navbar from "@/Components/Navbar";
import BackToTop from "@/Components/BackToTop";

export const metadata = {
  title: "Movies App",
  description: "A Next.js Movies Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Navbar />
          {children}
          <BackToTop />
        </FavoritesProvider>
      </body>
    </html>
  );
}
