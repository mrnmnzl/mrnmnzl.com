import { fetchAbout } from "@/sanity/utils/fetchAbout";
import { AboutLayoutDesktop } from "@/components/AboutComponents/AboutLayoutDesktop";
import { AboutLayoutMobile } from "@/components/AboutComponents/AboutLayoutMobile";

async function AboutPage() {
  const aboutData = await fetchAbout();

  return (
    <>
      <AboutLayoutDesktop aboutData={aboutData} />
      <AboutLayoutMobile aboutData={aboutData} />
    </>
  );
}

export default AboutPage;
