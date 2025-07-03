"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { Info, PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function GoogleMaps() {
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
      <section className="lg:px-[10%] my-4 lg:my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5236750549375!2d-118.4511830238089!3d34.00476657317493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2baf0f6080855%3A0x86d0e86efd5ecc4!2sMaplewood%20Ave%2C%20Los%20Angeles%2C%20CA%2090066%2C%20USA!5e0!3m2!1sen!2sin!4v1751384129701!5m2!1sen!2sin"
          className="w-full h-100"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="flex flex-col-reverse md:flex-row bg-main1 text-darkMain1 p-4 md:px-[10%] md:py-6">
        <div className="py-12 md:py-16 lg:py-28 flex-1 flex flex-col text-center md:text-left justify-between gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Our Office
            </h1>
            <p className="text-xl text-darkMain1 mb-2">
              1287 Maplewood Drive,
              <br /> Los Angeles,
              <br /> CA 90026
            </p>
            <Link
              href="/google-maps"
              className="p-2 bg-darkMain1 text-main1 rounded"
            >
              Google Maps
            </Link>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Hours</h1>
            <p className="text-xl text-darkMain1">
              <b>In-person:</b>
              <br /> Tue &amp; Thu, 10 AM–6 PM
            </p>
            <p className="text-xl text-darkMain1">
              <b>Virtual via Zoom:</b>
              <br /> Mon, Wed &amp; Fri, 1 PM–5 PM
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Contact</h1>
            <Link
              href="tel:(323) 555-0192"
              className="text-xl text-darkMain1 hover:text-neutal-900 inline-flex gap-2 items-center"
            >
              <PhoneCall width={18} height={18} /> (323) 555-0192
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className=" max-w-md mx-auto p-6 mt-6 lg:m-auto rounded-lg shadow-lg border border-darkMain1 bg-lightMain1 text-[#144133]">
            <h1 className="text-2xl font-bold mb-2 text-center">
              Get In Touch
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
                  Message
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
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
    </>
  );
}
