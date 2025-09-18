import "./globals.css";
import { FavoritesProvider } from "@/Components/FavoritesContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // مهم عشان ستايل التوست
import Navbar from "@/Components/Navbar";

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
        </FavoritesProvider>
      </body>
    </html>
  );
}
