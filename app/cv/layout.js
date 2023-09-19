import { MobileCloseButton } from "@/components/MobileCloseButton";

function CVLayout({ children }) {
  return (
    <main className="absolute w-full h-full overflow-hidden origin-center -translate-x-1/2 -translate-y-1/2 sm:h-3/4 sm:max-w-[800px] sm:w-full sm:rounded-xl shadow-window bg-neutral-100 dark:bg-cv-bg top-1/2 left-1/2 z-[1001]">
      {children}
      <MobileCloseButton />
    </main>
  );
}

export default CVLayout;
