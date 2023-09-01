import { headers } from "next/headers";
import { MenuBar } from "@/components/menu-bar";
import { Desktop } from "@/components/desktop";
import { Dock } from "@/components/dock";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "mrnmnzl",
  description: "Portfolio of Marion Menzl",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const isLayoutNeeded = !activePath.includes("/studio");

  return (
    <html lang="en">
      <body className="absolute top-0 flex flex-col w-full h-full">
        <Providers>
          {
            // We don't need the layout for the studio
            isLayoutNeeded ? (
              <>
                <MenuBar title={metadata.title} />
                <Desktop>{children}</Desktop>
                <Dock />
              </>
            ) : (
              children
            )
          }
        </Providers>
      </body>
    </html>
  );
}
