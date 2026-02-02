import React from "react";

interface LabelProps {
  title: string;
}

export const Label = ({ title }: LabelProps) => {
  return (
<div className="flex text-black gap-4    items-center">
      <div className="redCircle h-3 w-3 rounded-full bg-[#e93b05] "></div>
      <div className="label uppercase text-base tracking-normal">{title}</div>
    </div>
  );
};
