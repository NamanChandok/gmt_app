import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-[7rem] p-4 flex items-center justify-between sticky top-0 z-50 text-darkMain1 md:!px-[10%] bg-lightMain1/80 backdrop-blur-lg shadow-lg">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Serena Blake Logo"
          width={200}
          height={10}
        />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-4 text-sm xl:text-lg space-x-4">
          <li>
            <Link
              href="/services"
              className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#testimonials"
              className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/#faq"
              className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className="hidden xl:flex items-center rounded-md border bg-white font-medium px-6 py-2.5 border-darkMain1 text-lg">
        <Sparkles width={24} height={24} className="inline h-5 w-5 mr-2" />
        Get Started
      </button>
    </header>
  );
}
