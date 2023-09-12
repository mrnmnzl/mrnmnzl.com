export default function Layout({ children }) {
  return (
    <main className="absolute w-full h-full overflow-hidden origin-center -translate-x-1/2 -translate-y-1/2 sm:h-3/4 sm:w-[800px] rounded-xl shadow-window bg-cv-bg top-1/2 left-1/2">
      {children}
    </main>
  );
}
