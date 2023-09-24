import DisplayHandler from "@/components/DisplayHandler";
import { Providers } from "@/providers";
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
          <DisplayHandler>{children}</DisplayHandler>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
