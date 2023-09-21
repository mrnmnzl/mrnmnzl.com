import { MenuBar } from "@/components/MenuBar";
import { Desktop } from "@/components/Desktop";
import { Dock } from "@/components/Dock";
import { Providers } from "@/providers";
import { LockScreen } from "@/components/LockScreen";
import { LockScreenDesktop } from "@/components/LockScreen/LockScreenDesktop";
import { LockScreenMobile } from "@/components/LockScreen/LockScreenMobile";
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute top-0 flex flex-col w-full h-full">
        <Providers>
          <MenuBar title="mrnmnzl" />
          <Desktop>{children}</Desktop>
          <Dock />
          <LockScreen>
            <LockScreenDesktop className="hidden sm:flex" />
            <LockScreenMobile className="flex sm:hidden" />
          </LockScreen>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
