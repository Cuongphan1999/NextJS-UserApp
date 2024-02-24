
import { Inter } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar/Navbar";

import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create User App",
  description: "Build User App using NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        <main className="container">
        {children}
        </main>
      </body>
    </html>
  );
}
