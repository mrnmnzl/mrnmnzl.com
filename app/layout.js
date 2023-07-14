import MenuBar from "@/components/menu-bar";
import Desktop from "@/components/desktop";
import Dock from "@/components/dock";
import "./globals.css";

export const metadata = {
  title: "mrnmnzl",
  description: "Portfolio of Marion Menzl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-full absolute top-0">
        <MenuBar title={metadata.title} />
        <Desktop>{children}</Desktop>
        <Dock />
      </body>
    </html>
  );
}
