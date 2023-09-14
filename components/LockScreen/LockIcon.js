import React from "react";

const LockIcon = () => {
  const lockBody = (
    <svg viewBox="0 0 235 198" className="w-3 h-3">
      <rect
        id="Rectangle_1"
        data-name="Rectangle 1"
        width="235"
        height="198"
        rx="30"
        fill="#fff"
      />
    </svg>
  );

  const lockBar = (
    <svg
      viewBox="0 0 191.826 218.776"
      className="w-[10px] h-[10px] -mb-2 animate-unlocking origin-[9px_18px]"
    >
      <path
        id="Path_2"
        data-name="Path 2"
        d="M537.5,426.579V309.571S537,229.8,621.852,229.8s85.474,79.768,85.474,79.768V426.579"
        transform="translate(-526.5 -218.803)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="30"
      />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center mt-2 mb-6">
      {lockBar}
      {lockBody}
    </div>
  );
};

export { LockIcon };
