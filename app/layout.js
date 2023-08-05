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
  return (
    <html lang="en">
      <body className="absolute top-0 flex flex-col w-full h-full">
        <Providers>
          <MenuBar title={metadata.title} />
          <Desktop>{children}</Desktop>
          <Dock />
        </Providers>
      </body>
    </html>
  );
}
