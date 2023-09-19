import { fetchAbout } from "@/sanity/utils/fetchAbout";
import { AboutPageDesktop } from "@/components/AboutComponents/AboutPageDesktop";
import { AboutPageMobile } from "@/components/AboutComponents/AboutPageMobile";

async function AboutPage() {
  const aboutData = await fetchAbout();

  return (
    <>
      <AboutPageDesktop className="hidden sm:flex" data={aboutData} />
      <AboutPageMobile className="flex sm:hidden" data={aboutData} />
    </>
  );
}

export default AboutPage;
