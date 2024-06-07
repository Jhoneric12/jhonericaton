import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "./Context/ThemeProvider";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Jhon Eric Aton",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
