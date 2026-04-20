"use client";

import Image from "next/image";
import { acceptedInsuranceCarriers } from "../content/acceptedInsurance";

type Variant = "default" | "compact";

export default function AcceptedInsuranceLogos({ variant = "default" }: { variant?: Variant }) {
  const isCompact = variant === "compact";
  const logoW = isCompact ? 140 : 160;
  const logoH = isCompact ? 52 : 64;
  const minCellH = isCompact ? "min-h-[3.25rem]" : "min-h-[4rem]";

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${isCompact ? "gap-2.5" : "gap-3 sm:gap-4"} w-full`}
    >
      {acceptedInsuranceCarriers.map((carrier) => (
        <div
          key={carrier.id}
          className={`group flex flex-col items-center justify-center text-center rounded-xl border border-[#8B9D7F]/15 bg-white/70 shadow-sm backdrop-blur-sm cursor-default select-none
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-[#75866D]/35 hover:bg-white
            ${isCompact ? "px-2.5 py-2" : "px-3 py-3"}`}
        >
          <div
            className={`relative w-full ${minCellH} flex items-center justify-center mb-1`}
          >
            <Image
              src={carrier.logoSrc}
              alt={carrier.alt}
              width={logoW}
              height={logoH}
              className="object-contain max-h-full w-auto transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
          <p
            className={`font-medium text-black leading-snug pb-0.5 ${isCompact ? "text-xs" : "text-sm"} transition-colors duration-300 group-hover:text-[#4a5a42]`}
          >
            {carrier.name}
          </p>
        </div>
      ))}
    </div>
  );
}
