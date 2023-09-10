export default function Layout({ children }) {
  return (
    <main className="absolute h-full w-full sm:h-[600px] sm:w-[800px] rounded-xl overflow-hidden shadow-window bg-cv-bg">
      {children}
    </main>
  );
}
