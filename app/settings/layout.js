import { SettingsDesktopLayout } from "@/components/SettingsDesktopLayout";
import { SettingsMobileLayout } from "@/components/SettingsMobileLayout";

async function SettingsLayout({ children }) {
  return (
    <>
      <SettingsDesktopLayout className={"hidden sm:flex"}>
        {children}
      </SettingsDesktopLayout>
      <SettingsMobileLayout className={"flex sm:hidden"}>
        {children}
      </SettingsMobileLayout>
    </>
  );
}

export default SettingsLayout;
