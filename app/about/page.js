import { fetchAbout } from "@/sanity/utils/fetchAbout";
import { AboutDesktopPage } from "@/components/AboutDesktopPage";
import { AboutMobilePage } from "@/components/AboutMobilePage";

async function AboutPage() {
  const aboutData = await fetchAbout();

  return (
    <>
      <AboutDesktopPage className="hidden sm:flex" data={aboutData} />
      <AboutMobilePage className="flex sm:hidden" data={aboutData} />
    </>
  );
}

export default AboutPage;
