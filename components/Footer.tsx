import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <>
      <section className="bg-darkMain1 pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 text-main1 grid md:grid-cols-3 grid-cols-2">
          <div className="p-5">
            <Image
              className="bg-lightMain1 rounded-full mt-2 p-1"
              src="/logo.png"
              width={155}
              height={35}
              alt="Serena Blake Logo"
            />
            <div className="flex text-xs font-bold text-lightMain1 text-center items-center my-2 gap-2">
              <span className="text-sm text-nowrap">⭐ Top Rated</span> •
              <Link href="/#about" className="underline hover:no-underline">
                8+ Years Experience
              </Link>
              •
              <Link
                href="/#testimonials"
                className="underline hover:no-underline"
              >
                500+ Client Sessions
              </Link>
            </div>
            <p className="my-3">1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <Link
              href="tel:(323) 555-0192"
              className="hover:underline flex gap-2 items-center"
            >
              <Phone className="h-4 w-4" /> (323) 555-0192
            </Link>
          </div>
          <div className="p-5">
            <span className="uppercase text-sm font-bold">Links</span>
            <Link href="/book" className="my-3 block hover:underline">
              Get in Touch
            </Link>
            <Link href="/#testimonials" className="my-3 block hover:underline">
              Testimonials
            </Link>
            <Link href="/#about" className="my-3 block hover:underline">
              About Me
            </Link>
            <Link href="/#faq" className="my-3 block hover:underline">
              FAQ&apos;s
            </Link>
            <Link href="/services" className="my-3 block hover:underline">
              Therapies
            </Link>
          </div>
          <div className="p-5">
            <span className="uppercase text-sm font-bold">Services</span>
            <Link href="/individual" className="my-3 block hover:underline">
              Individual Counseling in Los Angeles, CA or Online
            </Link>
            <Link href="/couples" className="my-3 block hover:underline">
              Couples Counseling in Los Angeles, CA or Online
            </Link>
          </div>
        </div>
      </section>
      <div className="pt-2 bg-darkMain1">
        <footer className="py-10 flex flex-col gap-1 max-w-screen-lg mx-auto border-t border-[#ffe4c4]/50 text-main1 text-sm md:items-center px-6 md:px-3">
          <p>Serena Blake © Copyright 2025. All Rights Reserved.</p>
          <p className="text-xs">
            Credits to freepik for media{" "}
            <Link href="https://freepik.com/" className="hover:underline">
              www.freepik.com
            </Link>{" "}
            | People illustrations by{" "}
            <Link href="https://storyset.com/" className="hover:underline">
              Storyset
            </Link>
          </p>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy & Terms of Service
          </Link>
        </footer>
      </div>
    </>
  );
}
