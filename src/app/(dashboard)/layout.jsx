import customFont from "../../constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../Header";

export const metadata = {
  title: "Next js Dashboard",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        suppressHydrationWarning={true}
        className={`${customFont.variable} font-sans`}
      >
        <div>
          <Toaster />
          <Header />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
