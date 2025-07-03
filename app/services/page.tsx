"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="relative p-4 py-12 md:py-16 lg:py-28 md:px-[10%] bg-lightMain1">
        <p className="flex flex-wrap items-center gap-2.5 pt-2 pb-4">
          <Link
            className="text-darkMain1 lg:text-xl hover:text-foreground transition-colors"
            href="/"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-darkMain1 lg:text-xl">Therapies</span>
        </p>
        <h1 className="font-bold mb-2 text-4xl md:text-5xl xl:text-6xl text-darkMain1 py-4 text-center md:text-left md:mb-12">
          How I Help
        </h1>
        <Image
          src="/leaf.webp"
          width={500}
          height={500}
          alt="leaf"
          className="absolute bottom-0 right-0 z-0 hidden md:block md:max-h-[150px] md:max-w-[100px] lg:max-h-[250px] lg:max-w-[150px] xl:max-w-[200px] xl:max-h-[300px] xl:right-[5%]"
        />
        <div className="grid md:grid-cols-2 relative z-10 xl:grid-cols-3 gap-6 max-w-7xl mx-auto min-w-full">
          <Link
            href="/individual"
            className="rounded-xl group hover:shadow-xl transition duration-200 p-4 justify-between grid gap-4 bg-main1 border text-darkMain1 border-darkMain1 lg:p-6 xl:p-8"
          >
            <div className="group-hover:translate-x-2 grid gap-2 transition">
              <Image
                src="/individual.svg"
                alt="Individual Therapy"
                width={500}
                height={500}
                className="rounded w-full object-contain aspect-4/3 bg-lightMain1"
              />
              <strong className="text-2xl font-bold">
                Individual Counseling in Los Angeles, CA
              </strong>
              Find calm, build resilience, and heal from anxiety or past trauma.
            </div>
            <p className="rounded-md font-medium transition border text-center px-4 py-2 text-sm text-darkMain1 !border-darkMain1 w-full hover:bg-mainComplimentary1">
              Learn More
            </p>
          </Link>
          <Link
            href="/couples"
            className="rounded-xl group hover:shadow-xl transition duration-200 p-4 justify-between grid gap-4 bg-main1 text-darkMain1 border border-darkMain1 lg:p-6 xl:p-8"
          >
            <div className="group-hover:translate-x-2 grid gap-2 transition">
              <Image
                src="/couples.svg"
                alt="Couples Therapy"
                width={500}
                height={500}
                className="rounded w-full object-contain aspect-4/3 bg-lightMain1"
              />
              <strong className="text-2xl font-bold">
                Couples Counseling in Los Angeles, CA
              </strong>
              Reconnect, strengthen communication, and grow healthier
              relationships.
            </div>
            <p className="rounded-md font-medium transition border text-center px-4 py-2 text-sm text-darkMain1 !border-darkMain1 w-full hover:bg-mainComplimentary1">
              Learn More
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
