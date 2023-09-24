import { MenuBar } from "@/components/MenuBar";
import { Desktop } from "@/components/Desktop";
import { Dock } from "@/components/Dock";
import { Providers } from "@/providers";
import { LockScreen } from "@/components/LockScreen";
import { LockScreenDesktop } from "@/components/LockScreen/LockScreenDesktop";
import { LockScreenMobile } from "@/components/LockScreen/LockScreenMobile";
import "./globals.css";

export const metadata = {
  title: "mrnmnzl Portfolio",
  description: "A personal portfolio by Marion Menzl",
  openGraph: {
    title: "MRNMNZL Portfolio",
    description: "A personal portfolio by Marion Menzl",
    url: "https://mrnmnzl.com",
    siteName: "MRNMNZL Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRNMNZL Portfolio",
    description: "A personal portfolio by Marion Menzl",
    creator: "@mrnmnzl",
  },
};

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
