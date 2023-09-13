import { headers } from "next/headers";
import { MenuBar } from "@/components/MenuBar";
import { Desktop } from "@/components/Desktop";
import { Dock } from "@/components/Dock";
import { Providers } from "@/providers";
import "./globals.css";
import LockScreen from "@/components/LockScreen";

export const metadata = {
  title: "mrnmnzl",
  description: "Portfolio of Marion Menzl",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const activePath = headersList.get("x-pathname");

  const isLayoutNeeded = !activePath.includes("/studio");

  return (
    <html lang="en">
      <body className="absolute top-0 flex flex-col w-full h-full">
        <Providers>
          {isLayoutNeeded ? (
            <>
              <LockScreen />
              <MenuBar title={metadata.title} />
              <Desktop>{children}</Desktop>
              <Dock />
            </>
          ) : (
            children
          )}
        </Providers>
      </body>
    </html>
  );
}
