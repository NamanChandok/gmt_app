import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    if (!isOpen) return;
    let x = 0;
    const interval = setInterval(() => {
      setWidth((prev) => prev - 0.33);
      if (++x === 300) {
        clearInterval(interval);
      }
    }, 200);

    const timer = setTimeout(() => {
      setIsOpen(false);
      clearInterval(interval);
      setWidth(100);
    }, 60000);

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        clearInterval(interval);
        setWidth(100);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  return isOpen ? (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 z-60"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-1/2 z-70 w-[95%] rounded-lg md:w-full max-w-lg p-6 grid gap-4 md:rounded-none md:rounded-b-md bg-mainComplimentary1 text-darkMain1">
        <div className="h-4 overflow-hidden w-[90%] md:w-full absolute top-0 rounded-none bg-mainComplimentary1">
          <div
            className="h-full transition-all bg-darkMain1 border-lightMain1 border-t"
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <div className="flex flex-col gap-1.5 text-left md:text-center">
          <h2 className="font-semibold tracking-tight text-center text-4xl sm:py-4">
            Ready to Start Your Healing Journey?
          </h2>
          <div className="flex items-center gap-4">
            <Image
              alt="Serena Blake, Clinical Psychologist, Los Angeles, CA"
              width={320}
              height={400}
              className="rounded-lg object-cover w-[160px] h-[200px]"
              src="/headshot.jpg"
            />
            <p className="text-darkMain1 font-medium py-2 text-xl text-center pb-4">
              Take the first step toward healing and personal growth in Los
              Angeles, CA. Reach out today to explore how evidence-based therapy
              can support your journey.
            </p>
          </div>
          <div className="text-left">
            <p className="ml-1 text-sm font-bold text-gray-900">⭐ Top Rated</p>
            <div className="flex items-center gap-1">
              <Link
                className="text-xs font-bold text-gray-900 underline hover:no-underline"
                href="/#about"
              >
                8+ Years Experience
              </Link>
              •
              <Link
                className="text-xs font-bold text-gray-900 underline hover:no-underline"
                href="/#testimonials"
              >
                500+ Client Sessions
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md font-medium cursor-pointer transition-colors border py-1 text-darkMain1 border-darkMain1 flex-1 text-lg bg-transparent"
          >
            Close
          </button>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors py-1 bg-darkMain1 text-main1 text-lg flex-1 w-full hover:opacity-80 gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
