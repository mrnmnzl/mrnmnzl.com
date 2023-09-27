import { fetchGeneral } from "@/sanity/utils/fetchGeneral";
import { SettingsDesktopPage } from "@/components/SettingsDesktopPage";
import { SettingsMobilePage } from "@/components/SettingsMobilePage";

async function SettingsPage() {
  const data = await fetchGeneral();

  return (
    <>
      <SettingsDesktopPage className={"hidden sm:block"} data={data} />
      <SettingsMobilePage className={"sm:hidden"} data={data} />
    </>
  );
}

export default SettingsPage;
