"use client";
import { Faq } from "@/components/Faq";
import ReCAPTCHA from "react-google-recaptcha";
import {
  HeartHandshake,
  Info,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/Modal";
import { Accordion } from "@/components/Accordian";
import Loader from "@/components/Loader";

export default function Home() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [hydrated, setHydrated] = useState(false);

  const handleToggleAccordion = (index: number) => {
    setOpenAccordion(index);
  };

  const handleToggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

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

  const faqData = [
    {
      question: "Do you accept insurance?",
      answer:
        "Currently, I do not accept insurance directly. However, I can provide you with a detailed superbill for you to submit to your insurance provider for potential out-of-network reimbursement. Many clients are able to receive partial reimbursement this way. Please check with your insurance company for your specific benefits and requirements.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes! I offer secure, HIPAA-compliant online therapy sessions via Zoom on Mondays, Wednesdays, and Fridays between 1 PM and 5 PM. Online therapy allows you to receive the same compassionate, evidence-based care from the comfort of your home while maintaining privacy and convenience. Feel free to contact me with any questions about how teletherapy works.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I understand that life happens, and sometimes plans change. I kindly request that you provide at least 24 hours' notice if you need to cancel or reschedule your appointment. Cancellations with less than 24 hours' notice will be subject to a cancellation fee equal to the full session cost. This policy helps ensure that I can continue to provide consistent care to all clients.",
    },
  ];

  const accordianData = [
    {
      title: "🧩 Evidence-Based Cognitive Behavioral Therapy (CBT)",
      desc: "Identify and transform unhelpful thinking patterns using CBT techniques supported by science. Build clarity, resilience, and healthier habits that support your personal growth.",
      button: "Learn more about Evidence-Based CBT",
    },
    {
      title: "🧘‍♀️ Mindfulness and Somatic Awareness",
      desc: "Learn to reconnect with your body and calm your mind through evidence-based mindfulness practices. These techniques help you regulate emotions, reduce stress, and foster a deeper sense of self-understanding.",
      button: "Explore Mindfulness and Somatic Awareness",
    },
    {
      title: "🎨 Creative Expression and Narrative Work",
      desc: "Use art, journaling, storytelling, and other creative tools to explore your experiences, reframe your personal narrative, and build a more empowering sense of identity and meaning.",
      button: "Experiece Creative Expression",
    },
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Modal />
      <Loader isLoading={!hydrated} />
      <header className="relative w-full h-full overflow-hidden flex items-center justify-center min-h-[calc(100vh-7rem)]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/indiv-bg.jpg"
          alt="Background Image"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-screen-lg">
          <p className="text-lightMain1/80 text-sm mb-3">
            Individual Counselling in Los Angeles &amp; Online
          </p>
          <h1 className="text-4xl font-extrabold text-center text-white">
            Find Healing, Resilience, and Personal Growth in a Supportive
            Environment
          </h1>
          <p className="md:text-2xl max-w-3xl mx-auto font-medium text-lightMain1 my-4">
            Discover Healing, Resilience, and Purpose in Los Angeles, CA.
          </p>
          <p className="text-xs flex items-center gap-1.5 font-bold text-lightMain1 text-left mb-4">
            ⭐ <span className="text-sm">Top Rated</span> •
            <Link className="underline hover:no-underline" href="#about">
              8+ Years Experience
            </Link>
            •
            <Link className="underline hover:no-underline" href="#testimonials">
              500+ Client Sessions
            </Link>
            •<span>Compassionate, Personalized Care</span>
          </p>
          <Link
            href="/book"
            className="flex w-max items-center rounded-xl bg-rainbow bg-gradient-to-b from-blue-100 to-white relative mx-auto px-6 py-2.5 text-lg"
          >
            <Sparkles width={24} height={24} className="inline h-5 w-5 mr-2" />
            Start Healing Today
          </Link>
        </div>
      </header>

      <section className="py-12 grid grid-cols-2 md:py-24 items-center bg-lightMain1 px-8 md:px-[calc(10%+1.25rem)] gap-6 lg:gap-12">
        <div className="space-y-4">
          <span className="inline-block rounded-lg bg-main1 px-3 py-1 text-sm text-darkMain1">
            Therapy for Personal Struggles | Los Angeles, CA
          </span>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Struggling with Anxiety, Low Self-Worth, or Feeling Stuck?
          </h1>
          <p className="md:text-xl">
            You are worthy of healing, growth, and meaningful connection.
            Therapy can help you rediscover your strength, build resilience, and
            create a healthier, more fulfilling life.
          </p>
          <div className="rounded-xl text-card-foreground shadow border-l-4 bg-red-100/20 border-l-green-400 p-4">
            <p className="font-semibold text-lg">
              Self-Doubt and Low Confidence
            </p>
            <p>
              You may know you have potential - but doubts, guilt, or harsh
              self-talk keep holding you back. Therapy can help rebuild your
              sense of self-worth and foster a more compassionate view of
              yourself.
            </p>
          </div>
          <div className="rounded-xl text-card-foreground shadow border-l-4 bg-red-100/20 border-l-green-400 p-4">
            <p className="font-semibold text-lg">
              Persistent Anxiety or Overwhelm
            </p>
            <p>
              Constant worry or fear makes it hard to feel calm and present. You
              want to feel more confident managing stress and responding to
              life’s challenges.
            </p>
          </div>
          <div className="rounded-xl text-card-foreground shadow border-l-4 bg-red-100/20 border-l-green-400 p-4">
            <p className="font-semibold text-lg">
              Disconnection and Loneliness
            </p>
            <p>
              You feel distant from those around you - or even from yourself.
              Therapy offers a place to explore healthier ways to connect and
              build more secure, supportive relationships.
            </p>
          </div>
          <div className="rounded-xl text-card-foreground shadow border-l-4 bg-red-100/20 border-l-green-400 p-4">
            <p className="font-semibold text-lg">
              Past Trauma and Emotional Pain
            </p>
            <p>
              Painful experiences may still shape how you think, feel, and
              relate to others. Together, we can process these wounds and move
              toward authentic healing, not just coping.
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <Link
              href="/book"
              className="bg-darkMain1 p-2 px-4 rounded-xl hover:bg-main1 hover:text-darkMain1 hover:border hover:border-darkMain1 text-lightMain1"
            >
              Start Healing Today
            </Link>
            <Link
              href="#"
              className="border border-darkMain1 p-2 px-4 text-darkMain1 rounded-xl"
            >
              See How I Work
            </Link>
          </div>
        </div>
        <div className="min-h-[500px] relative h-max rounded-xl overflow-hidden">
          <Image
            src="/individual.jpg"
            alt="Individual Therapy"
            className="object-cover"
            width={667}
            height={1000}
          />
          <div className="grid grid-cols-2 absolute bottom-0 inset-x-0 text-white bg-gradient-to-t from-slate-900/90 to-transparent p-6 gap-4">
            <p className="col-span-2 text-xl font-bold">
              A Path Toward Healing and Growth
            </p>
            <p className="flex gap-2 items-center">
              <UserCheck className="h-5 w-5 text-yellow-400" />
              Personalized, Evidence-Based Support
            </p>
            <p className="flex gap-2 items-center">
              <HeartHandshake className="h-5 w-5 text-red-400" />
              Compassionate, Non-Judgmental Space
            </p>
            <p className="flex gap-2 items-center">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              8+ Years of Clinical Experience
            </p>
            <p className="flex gap-2 items-center">
              <Users className="h-5 w-5 text-blue-400" />
              Collaborative, Empowering Care
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-lightMain1 px-4 md:px-[calc(10%+1.25rem)]">
        <div className="mx-auto lg:mx-0 space-y-4 max-w-3xl">
          <span className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-darkMain1">
            Individual Counseling | Los Angeles, CA
          </span>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            A Proven, Empathic Approach for Change
          </h1>
          <p className="md:text-xl">
            Using science-backed methods like cognitive-behavioral therapy,
            Serena Blake helps move toward a more balanced, meaningful life.
          </p>
        </div>
        <div className="mt-8 flex w-full items-start justify-between gap-12 flex-row-reverse">
          <div className="w-full md:w-1/2">
            {accordianData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                desc={item.desc}
                button={item.button}
                isOpen={openAccordion === index}
                onToggle={() => handleToggleAccordion(index)}
              />
            ))}
          </div>
          <Image
            className="w-full md:w-1/2 rounded-xl object-cover aspect-4/3"
            src="/change.jpg"
            alt="Empathetic Approach to Change"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-blue-100 p-4 py-12 md:py-16 md:px-[10%] grid gap-8"
      >
        <div className="max-w-3xl grid gap-4">
          <span className="mx-auto md:mx-0 w-max rounded-lg bg-amber-100 px-3 py-1 text-sm">
            Client Experiences | Los Angeles, CA
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
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-lightMain1/70">
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
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-lightMain1/70">
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
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-lightMain1/70">
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
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-lightMain1/70">
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
            <div className="w-full max-w-[95vw] md:max-w-sm flex-shrink-0 mr-8 p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-lightMain1/70">
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
      <section
        id="about"
        className="bg-blue-100 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] grid lg:grid-cols-2 items-center gap-3 lg:gap-0"
      >
        <div className="relative h-[400px] w-[70vw] md:w-[300px] bg-[url('/headshot.jpg')] rounded-[5%] justify-self-center border-10 border-[#daf5f1] bg-cover bg-center">
          <div className="p-1.5 pl-3 pr-4 grid shadow-md absolute bottom-0 bg-main1/70 rounded-r-lg">
            <p className="font-semibold text-sm">Serena Blake</p>
            <p className="text-xs">Clinical Psychologist</p>
            <Link href="#testimonials" className="text-sm font-semibold">
              ⭐ Top Rated | 8+ Years Experience
            </Link>
          </div>
        </div>
        <div className="text-darkMain1 flex flex-col md:mt-0 gap-2 lg:gap-4 flex-1">
          <span className="mx-auto md:mx-0 w-max rounded-lg bg-amber-100 px-3 py-1 text-sm">
            Experienced Clinical Psychologist in Los Angeles, CA
          </span>
          <h1 className="text-4xl font-bold lg:text-5xl">
            Your Journey to Inner Peace Starts Here
          </h1>
          <p className="leading-relaxed">
            With over <b>8 years of experience</b> and{" "}
            <b>500+ successful client sessions</b>, I am honored to support{" "}
            <b>individuals and couples</b> from diverse backgrounds and life
            stages. My mission is to help you <b>find confidence</b> in your
            story and guide you toward <b>evidence-based pathways</b> for
            healing and growth.
          </p>
          <p className="leading-relaxed">
            My approach blends <b>cognitive-behavioral therapy</b>,{" "}
            <b>mindfulness</b>, and{" "}
            <b>a compassionate, person-centered philosophy</b> to reduce
            anxiety, strengthen relationships, and promote resilience in a safe,
            empowering space. Whether you are seeking to{" "}
            <b>move beyond unhelpful patterns</b>,{" "}
            <b>build stronger connections</b>, or <b>enhance your well-being</b>
            , I am here to walk alongside you on your journey.
          </p>
          <p className="leading-relaxed">
            I would be honored to walk with you on this journey.
          </p>
          <Link
            href="/book"
            className="flex rounded-md gap-2 p-2 w-max items-center bg-darkMain1 text-main1"
          >
            <Sparkles className="h-4 w-4" />
            Start Healing Today
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] text-darkMain1">
        <h1 className="text-3xl font-semibold mb-4">Serving Los Angeles, CA</h1>
        <p className="mb-6">
          Located in Los Angeles, CA, our practice offers convenient in-person
          therapy sessions in the city.
        </p>
        <h3 className="font-medium text-lg mb-1">Our Los Angeles Office</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5236750549375!2d-118.4511830238089!3d34.00476657317493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2baf0f6080855%3A0x86d0e86efd5ecc4!2sMaplewood%20Ave%2C%20Los%20Angeles%2C%20CA%2090066%2C%20USA!5e0!3m2!1sen!2sin!4v1751384129701!5m2!1sen!2sin"
          className="w-full h-100"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="mt-2 text-sm mb-8">
          1287 Maplewood Drive, Los Angeles, CA 90026
          <br />
          (323) 555-0192
        </p>
        <h3 className="font-semibold text-xl mt-6 mb-2">
          Why Choose Us in Los Angeles?
        </h3>
        <p className="mb-8">
          Our Los Angeles office is conveniently located near downtown, serving
          the Greater Los Angeles area. We are committed to providing
          evidence-based, compassionate therapy in the heart of California’s
          cultural and wellness capital.
        </p>
        <Link
          href="/book"
          className="mt-2 flex rounded-xl gap-2 px-4 w-max py-3 hover:bg-darkMain1/90 items-center bg-darkMain1 text-lightMain1 border-4 border-main1"
        >
          <Sparkles className="h-4 w-4" />
          Start Healing Today
        </Link>
      </section>

      <section
        id="faq"
        className="bg-main1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] text-darkMain1 space-y-4 md:space-y-8"
      >
        <span className="block mx-auto md:mx-0 w-max rounded-lg bg-amber-100 px-3 py-1 text-sm">
          Therapy FAQs for Individuals
        </span>
        <h1 className="font-bold text-4xl md:text-6xl block pb-2 md:pb-4">
          Frequently Asked Questions
        </h1>
        <div className="grid gap-2 mt-6">
          {faqData.map((item, index) => (
            <Faq
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQ === index}
              onToggle={() => handleToggleFAQ(index)}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6 text-center bg-blue-100 text-darkMain1 md:px-[10%] pb-14">
        <Link
          href="tel:(323) 555-0192"
          className="inline-flex gap-2 items-center whitespace-nowrap font-medium transition-colors h-11 rounded-xl px-8 lg:text-lg lg:p-6 bg-main1/50 hover:outline text-darkMain1 hover:outline-darkMain1 hover:bg-main1 border border-darkMain1"
        >
          <PhoneCall className="h-4 w-4" /> Call Serena Blake
        </Link>
        <span className="block text-lg">OR</span>
        <div className="flex-1">
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
    </>
  );
}
