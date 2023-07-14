import React from "react";
import AppIcon from "./app-icon";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="dock__content bg-dock-mobile dark:bg-dock-mobile-dark sm:bg-dock dark:sm:bg-dock-dark">
        <AppIcon icon="💻" location="/projects" text="Projects" />
        <AppIcon icon="ℹ️" location="/about" text="About Marion" />
        <AppIcon icon="📧" location="mailto:marion.menzl@me.com" text="Mail" />
        <AppIcon icon="⚙️" location="/settings" text="Settings" />
      </div>
    </footer>
  );
};

export default Dock;
