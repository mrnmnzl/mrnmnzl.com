import { Dots } from "@/components/dots";

export default function Layout({ children }) {
  return (
    <main className="projects-page">
      <div className="w-[full] border-r-[1px] backdrop-blur border-window-border-light bg-glass-window-light dark:bg-glass-window-dark">
        <div className="p-5">
          <Dots location={"/"} red yellow green activeDots={3} />
        </div>
      </div>
      <div className="w-full px-6 bg-window-light dark:bg-window-dark text-text-light dark:text-text-dark">
        {children}
      </div>
    </main>
  );
}
