"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-[7rem] p-4 flex items-center justify-between sticky top-0 z-50 text-darkMain1 md:!px-[10%] bg-lightMain1/80 backdrop-blur-lg shadow-lg">
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
            <li className="group relative">
              <Link
                href="/services"
                className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
              >
                Services
              </Link>
              <div className="transition scale-0 group-hover:scale-100 absolute top-[calc(100%+1rem)] shadow rounded-md left-0 bg-white grid gap-3 grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                <Link
                  href="/individual"
                  className="text-sm leading-none p-4 space-y-1 hover:bg-main1 transition rounded-md"
                >
                  <p className="font-bold">
                    Individual Counseling in Los Angeles, CA
                  </p>
                  <p>
                    Find calm, build resilience, and heal from anxiety or past
                    trauma.
                  </p>
                </Link>
                <Link
                  href="/couples"
                  className="text-sm leading-none p-4 space-y-1 hover:bg-main1 transition rounded-md"
                >
                  <p className="font-bold">
                    Couples Counseling in Los Angeles, CA
                  </p>
                  <p>Reconnect and grow healthier relationships.</p>
                </Link>
              </div>
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
                href="/contact"
                className="hover:text-neutral-900 hover:bg-mainComplimentary1 transition-colors rounded-md px-3 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/book"
          className="hidden xl:flex items-center rounded-md border bg-white font-medium px-6 py-2.5 border-darkMain1 text-lg"
        >
          <Sparkles width={24} height={24} className="inline h-5 w-5 mr-2" />
          Get Started
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer flex items-center justify-center rounded-md transition-colors h-10 w-10 lg:hidden hover:bg-darkMain1/30"
        >
          <Menu />
        </button>
      </div>
      <nav
        className={`fixed inset-y-0 bg-lightMain1 text-darkMain1 shadow-lg gap-8 flex flex-col p-6 items-center justify-center transition-all ease-in-out duration-500 max-w-sm z-90 w-[80%] ${isOpen ? "right-0" : "-right-full"}`}
      >
        <X
          className="absolute cursor-pointer top-6 right-6 h-5 w-5"
          onClick={() => setIsOpen(false)}
        />
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-3xl font-bold capitalize text-center"
        >
          Serena Blake
        </Link>
        <Link
          href="/services"
          onClick={() => setIsOpen(false)}
          className="text-2xl mt-2"
        >
          How I Help
        </Link>
        <Link
          href="/#about"
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          About Me
        </Link>
        <Link
          href="/#testimonials"
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          Testimonials
        </Link>
        <Link
          href="/#faq"
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          FAQs
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
