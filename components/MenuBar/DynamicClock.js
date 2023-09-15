import dynamic from "next/dynamic";

const DynamicClock = dynamic(() => import("./Clock"), {
  ssr: false,
  loading: () => (
    <span className="m-0 text-[13px] blur-[2px]">Thu 14. Sep 21:31</span>
  ),
});

export { DynamicClock };
