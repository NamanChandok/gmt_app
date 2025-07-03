"use client";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Services() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Loader isLoading={!hydrated} />
      <main className="prose p-8 lg:py-16 w-full bg-main1/30 text-darkMain1 space-y-5">
        <h1 className="font-extrabold text-4xl pb-4">Privacy Policy</h1>
        <p>Last updated: July 2025</p>

        <p>
          Serena Blake, Clinical Psychologist, is committed to protecting your
          privacy and respecting the confidentiality of your personal
          information. This page explains what data we collect, how we use it,
          and what your rights are.
        </p>

        <h2 className="text-2xl font-bold">Information We Collect</h2>
        <p>
          We may collect personal information you provide, including your name,
          email address, phone number, and any details shared through our forms
          or booking pages. We also collect limited technical data such as your
          browser type, device, IP address, and the pages you visit, to improve
          site security and performance.
        </p>

        <h2 className="text-2xl font-bold">How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Respond to inquiries and requests</li>
          <li>Provide requested services</li>
          <li>Maintain records as required by law</li>
          <li>Improve our website’s security and performance</li>
        </ul>
        <p>
          We do not sell or share your personal information with third parties
          for marketing purposes.
        </p>

        <h2 className="text-2xl font-bold">Cookies</h2>
        <p>
          This website may use cookies or similar technologies to enhance your
          browsing experience. You can disable cookies in your browser settings
          if you wish.
        </p>

        <h2 className="text-2xl font-bold">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          data. However, no system is 100% secure, and you share your
          information at your own risk.
        </p>

        <h2 className="text-2xl font-bold">Your Rights</h2>
        <p>
          You have the right to request access to or deletion of your personal
          data. To exercise these rights, please{" "}
          <Link href="/contact" className="underline hover:no-underline">
            contact us
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold">Contact</h2>
        <p>
          If you have questions or concerns about this privacy policy, please
          contact Serena Blake using the details on our{" "}
          <Link href="/contact" className="underline hover:no-underline">
            contact page
          </Link>
          .
        </p>
      </main>
    </>
  );
}
