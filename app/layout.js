import { MenuBar } from "@/components/MenuBar";
import { Desktop } from "@/components/Desktop";
import { Dock } from "@/components/Dock";
import { Providers } from "@/providers";
import LockScreen from "@/components/LockScreen";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute top-0 flex flex-col w-full h-full">
        <Providers>
          <MenuBar title="mrnmnzl" />
          <Desktop>{children}</Desktop>
          <Dock />
          <LockScreen />
        </Providers>
      </body>
    </html>
  );
}
