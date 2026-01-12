"use client";

import React, { useState } from "react";

const AnimatingIcon = ({ open, type }: { open: boolean; type: string }) => {
  const barColor =
    type === "past"
      ? "bg-[#727272]"
      : type === "next"
      ? "bg-[#727272]"
      : type === "upcomming" && !open
      ? "bg-[#37b34a]"
      : "bg-white";

  return (
    <div className="relative w-2.5 h-2.5 flex items-center justify-center">
      {/* Horizontal bar */}
      <div
        className={`absolute w-full h-[3px] transition-colors duration-300 ${barColor}`}
      />
      {/* Vertical bar (animates) */}
      <div
        className={`absolute w-[3px] h-full transition-all duration-500 ease-in-out ${
          open ? "rotate-90" : "rotate-0"
        } ${barColor}`}
      />
    </div>
  );
};

export default function CollapsibleRace({
  title,
  subtitle,
  children,
  horses,
  type = "upcoming",
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const isUpcoming =
    ["upcoming", "upcomming"].includes(type) ||
    ["upcoming", "upcomming"].includes(horses?.["type"]);
  const isPastOrNext =
    type === "past" ||
    horses?.["type"] === "past" ||
    type === "next" ||
    horses?.["type"] === "next";
  const isLive = type === "live" || horses?.["type"] === "live";

  return (
    <div className="overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-start justify-between pl-1 pr-4 py-1
          font-semibold text-sm transition-colors border-t border-b border-black/10
          ${
            !open
              ? isPastOrNext || isUpcoming
                ? "bg-white text-gray-800"
                : "bg-[#b5280c] text-white"
              : isLive || isPastOrNext || isUpcoming
              ? "bg-[#37b34a] text-white"
              : "bg-[#3b82f6] text-white"
          }
        `}
      >
        <div className="flex flex-row text-left items-center gap-2">
          {(type === "live" ||
            horses?.["type"] === "live" ||
            type === "next" ||
            horses?.["type"] === "next") && (
            <div className="flex flex-col">
              {type === "live" || horses?.["type"] === "live" ? (
                <span className="flex flex-col text-left text-[0.7em] px-2 bg-[#b5280c] text-white">
                  LIVE
                </span>
              ) : (
                <span className="text-center text-[0.65em] uppercase font-bold rounded-tr-[3px] rounded-br-[3px] bg-[#ff0] text-black pl-0">
                  00:31
                </span>
              )}
              <span>08:58</span>
            </div>
          )}
          <div className="flex flex-col text-left">
            <span className="uppercase font-normal">{title}</span>
            <span className="text-xs opacity-90">{subtitle}</span>
          </div>
        </div>

        {/* Custom Animating Plus / Minus */}
        <div className="mt-1.5 cursor-pointer">
          <AnimatingIcon
            open={open}
            type={
              type === "live" || horses?.["type"] === "live"
                ? "live"
                : type || horses?.["type"]
            }
          />
        </div>
      </button>

      {/* Content */}
      <div>
        <div
          className={`duration-700 ease-in-out origin-center transition-transform
      ${
        open
          ? "py-2 [transform:scaleY(1)_rotateX(0deg)] opacity-100 h-auto"
          : "[transform:scaleY(0)_rotateX(0.01deg)] opacity-0 h-0 overflow-hidden"
      }
    `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
