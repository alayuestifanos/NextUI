"use client";

// import { Lock } from 'lucide-react'

import { IoIosLock } from "react-icons/io";

interface BankBadgeProps {
  value: string | number;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  className?: string;
  showLock?: boolean;
  disabled?: boolean;
}

export default function BankBadge({
  value,
  bgColor = "bg-[#ffff8099]",
  borderColor = "border-green-700",
  textColor = "text-[#111111b3]",
  iconColor,
  className = "",
  showLock = true,
  disabled = true,
}: BankBadgeProps) {
  return (
    <div
      className={`relative inline-block min-w-[50px] py-[2px] px-[7px] font-semibold border-1 transition-all duration-200
        ${bgColor} ${borderColor} 
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"} 
        ${className || "opacity-50"}
      `}
      style={{
        transform: "translateZ(0)",
        isolation: "isolate",
        willChange: "transform"
      }}
    >
      {showLock && (
        <IoIosLock
          className={`absolute -top-[6px] -right-[6px] w-4 h-4 font-bold text-[#464148] ${
            iconColor || ""
          } pointer-events-none z-10`}
          style={{ 
            transform: "translateZ(0) scale(1)",
            position: "absolute",
            willChange: "transform"
          }}
        />
      )}
      <p className={`${textColor} text-center text-base font-bold text-[#111]`}>
        {value}
      </p>
    </div>
  );
}
