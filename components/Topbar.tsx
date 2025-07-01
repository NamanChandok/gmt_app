import React from "react";
import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";
export default function Topbar() {
  return (
    <div className="bg-[#fff0ec] text-darkMain1 py-2 flex justify-between gap-12 px-2 md:!px-[10%] text-sm border-b border-darkMain1">
      <Link
        href="tel:(323) 555-0192"
        className="flex gap-2 items-center hover:text-neutral-900"
      >
        <PhoneCall width={18} height={18} />
        (323) 555-0192
      </Link>
      <Link
        href="/google-maps"
        className="flex gap-1 items-center hover:underline"
      >
        <MapPin width={18} height={18} />
        1287 Maplewood Drive, Los Angeles, CA 90026
      </Link>
    </div>
  );
}
