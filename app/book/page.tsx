"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { Info, PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Book() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recaptchaRef.current?.getValue()) {
      console.log("Please Submit Captcha");
      return;
    }
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const message = formData.get("message");
      console.log(name, email, phone, message);
      setSubmitted(true);
    }
  };

  const onChange = (token: string | null) => {
    console.log("Captcha value:", token);
  };
  return (
    <>
      <Loader isLoading={!hydrated} />
      <section className="flex-col-reverse flex lg:flex-row gap-4 px-4 lg:px-[10%] py-4 bg-lightMain1 text-darkMain1">
        <div className="flex items-center lg:items-start flex-col gap-2 lg:gap-4 flex-1 py-4 lg:py-0">
          <Image
            className="rounded-lg h-[200px] w-[160px] object-cover"
            src="/headshot.jpg"
            alt="Serena Blake"
            width={320}
            height={400}
          />
          <h1 className="mb-2 font-extrabold text-4xl">
            Hi, I&apos;m Serena Blake, Clinical Psychologist
          </h1>
          <p className="font-medium md:text-xl">
            Having worked with individuals of all ages, abilities, origins, and
            presenting issues for <b>more than 8 years</b>, I truly enjoy
            dealing with a diverse range of clients. My objective is to help you
            build credibility in your own journey and educate you on healing
            pathways.
          </p>
        </div>
        <div className="space-y-8 text-center flex-1">
          <Link
            href="tel:(323) 555-0192"
            className="inline-flex gap-2 items-center whitespace-nowrap font-medium transition-colors h-11 rounded-md px-8 lg:text-lg lg:p-6 bg-main1/50 hover:outline text-darkMain1 hover:outline-darkMain1 hover:bg-main1"
          >
            <PhoneCall className="h-4 w-4" /> Call Now
          </Link>
          <span className="block text-xl font-bold">OR</span>
          <div className="flex-1 text-left max-w-md mx-auto p-6 mt-6 lg:m-auto rounded-lg shadow-lg border border-darkMain1 bg-lightMain1 text-[#144133]">
            <h1 className="text-2xl font-bold mb-2 text-center">
              Free Consultation Form
            </h1>
            <p className="text-sm text-center mb-6">
              Serena will contact you as soon as possible, generally within one
              business day, if you just complete the short fields below. This
              form is completely free, private, and secure.
            </p>
            {submitted ? (
              <h1 className="text-xl font-semibold text-darkMain1 mt-4 text-center">
                ☺️ Thank you! Serena will get back to you soon
              </h1>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium" htmlFor="name">
                  Name
                  <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none mt-1 border-[#144133] placeholder:text-darkMain/30"
                  />
                </label>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                    required
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none mt-1 border-[#144133] placeholder:text-darkMain/30"
                  />
                </label>
                <label className="block text-sm font-medium" htmlFor="phone">
                  Phone
                  <input
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    type="tel"
                    required
                    className="w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none mt-1 border-[#144133] placeholder:text-darkMain/30"
                  />
                </label>
                <label className="block text-sm font-medium" htmlFor="name">
                  How Can I Help?
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please provide some details to help us prepare for your consultation (eg. goals, concerns)"
                    required
                    className="w-full min-h-[60px] rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none mt-1 border-[#144133] placeholder:text-darkMain/30"
                  ></textarea>
                </label>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
                  onChange={onChange}
                  ref={recaptchaRef}
                />
                <button
                  type="submit"
                  className="rounded-md text-sm font-medium cursor-pointer h-10 px-4 py-2 w-full transition duration-300 bg-darkMain1 text-main1 ease-in-out hover:outline hover:outline-darkMain1 hover:bg-lightMain1 hover:text-darkMain1"
                >
                  Submit
                </button>
                <small className="text-sm">
                  <Info className="h-3 w-3 inline m-auto" /> By submitting, you
                  confirm you are 18+ and agree to our{" "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy &amp; TOS
                  </Link>
                  {"  "}
                  and to receive emails &amp; texts from Serena Blake.
                </small>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="bg-lightMain1 p-4 pb-12 md:pb-16 lg:pb-28 md:px-[10%] grid gap-8">
        <div className="max-w-3xl grid gap-4">
          <span className="mx-auto md:mx-0 w-max rounded-lg bg-amber-100 px-3 py-1 text-sm">
            Client success stories and testimonials
          </span>
          <h1 className="text-4xl font-bold lg:text-5xl">
            What Former Clients Say
          </h1>
          <p className="md:text-xl">
            Real accounts from people who have grown and healed through our work
            together.
          </p>
        </div>
        <div className="relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
          <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll md:hover:[animation-play-state:paused]">
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-main1">
              <span className="text-sm mb-6 block">Happy Client</span>
              <p className="mb-6 font-medium">
                <span className="italic text-sm lg:hidden mb-2 block">
                  👉 Tap &amp; Hold to Stop
                </span>
                Client testimonials are <b>coming soon</b>. Please check back
                later for insights from those who have worked with Serena Blake,
                Clinical Psychologist.
              </p>
            </div>
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-main1">
              <span className="text-sm mb-6 block">Happy Client</span>
              <p className="mb-6 font-medium">
                <span className="italic text-sm lg:hidden mb-2 block">
                  👉 Tap &amp; Hold to Stop
                </span>
                Client testimonials are <b>coming soon</b>. Please check back
                later for insights from those who have worked with Serena Blake,
                Clinical Psychologist.
              </p>
            </div>
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-main1">
              <span className="text-sm mb-6 block">Happy Client</span>
              <p className="mb-6 font-medium">
                <span className="italic text-sm lg:hidden mb-2 block">
                  👉 Tap &amp; Hold to Stop
                </span>
                Client testimonials are <b>coming soon</b>. Please check back
                later for insights from those who have worked with Serena Blake,
                Clinical Psychologist.
              </p>
            </div>
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-main1">
              <span className="text-sm mb-6 block">Happy Client</span>
              <p className="mb-6 font-medium">
                <span className="italic text-sm lg:hidden mb-2 block">
                  👉 Tap &amp; Hold to Stop
                </span>
                Client testimonials are <b>coming soon</b>. Please check back
                later for insights from those who have worked with Serena Blake,
                Clinical Psychologist.
              </p>
            </div>
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-main1">
              <span className="text-sm mb-6 block">Happy Client</span>
              <p className="mb-6 font-medium">
                <span className="italic text-sm lg:hidden mb-2 block">
                  👉 Tap &amp; Hold to Stop
                </span>
                Client testimonials are <b>coming soon</b>. Please check back
                later for insights from those who have worked with Serena Blake,
                Clinical Psychologist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
