import { fetchAbout } from "@/sanity/utils/fetchAbout";
import { SettingsDesktopPage } from "@/components/SettingsDesktopPage";
import { SettingsMobilePage } from "@/components/SettingsMobilePage";

async function SettingsPage() {
  const data = await fetchAbout();

  return (
    <>
      <SettingsDesktopPage className={"hidden sm:block"} data={data} />
      <SettingsMobilePage className={"sm:hidden"} data={data} />
    </>
  );
}

export default SettingsPage;
