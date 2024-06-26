import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Achiever",
  description: "Job and internship search platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} _bgClassic _textTurquoise`}>
        {children}
      </body>
    </html>
  );
}
