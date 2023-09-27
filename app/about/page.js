import { fetchGeneral } from "@/sanity/utils/fetchGeneral";
import { AboutDesktopPage } from "@/components/AboutDesktopPage";
import { AboutMobilePage } from "@/components/AboutMobilePage";

async function AboutPage() {
  const aboutData = await fetchGeneral();

  return (
    <>
      <AboutDesktopPage className="hidden sm:flex" data={aboutData} />
      <AboutMobilePage className="flex sm:hidden" data={aboutData} />
    </>
  );
}

export default AboutPage;
