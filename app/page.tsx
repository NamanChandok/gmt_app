"use client";
import { Accordion } from "@/components/Accordian";
import { Heart, Sparkles, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const flowerRef = useRef<HTMLImageElement | null>(null);

  const [years, setYears] = useState(0);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.3;
      if (flowerRef.current) {
        flowerRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const emp = document.querySelector("#emp") as HTMLElement;
    const con = document.querySelector("#con") as HTMLElement;
    const well = document.querySelector("#well") as HTMLElement;
    const phrases = [emp, con, well];
    let index = 0;

    phrases.forEach((p, i) => {
      if (p) p.style.opacity = i === 0 ? "1" : "0";
    });

    const animatePhrase = () => {
      const current = phrases[index];
      const nextIndex = (index + 1) % phrases.length;
      const next = phrases[nextIndex];

      if (current) {
        current.animate(
          [
            { opacity: 1, transform: "translateY(0px)" },
            { opacity: 0, transform: "translateY(-30px)" },
          ],
          {
            duration: 700,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
      }

      if (next) {
        next.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0px)" },
          ],
          {
            duration: 700,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
      }

      index = nextIndex;
    };

    const interval1 = setInterval(animatePhrase, 3000);

    let yearsStart = 0;
    let sessionsStart = 0;
    let interval: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start counting
            interval = setInterval(() => {
              if (yearsStart < 8) {
                yearsStart += 1;
                setYears(yearsStart);
              }
              if (sessionsStart < 500) {
                sessionsStart += 10;
                setSessions((prev) => (prev + 10 > 500 ? 500 : prev + 10));
              }
              if (yearsStart >= 8 && sessionsStart >= 500) {
                clearInterval(interval);
              }
            }, 20);
          } else {
            clearInterval(interval);
            setYears(0);
            setSessions(0);
            yearsStart = 0;
            sessionsStart = 0;
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(interval1);
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleToggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
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

  return (
    <>
      <header className="relative w-full h-full overflow-hidden flex items-center justify-center min-h-[calc(100vh-7rem)]">
        <Image
          className="absolute top-0 left-0 w-full h-full opacity-100"
          src="/bg.png"
          alt="Background Image"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-lightMain1/80 text-sm mb-3">
            Clinical Psychologist in Los Angeles &amp; Online
          </p>
          <h1 className="text-4xl font-extrabold text-center text-white mb-3">
            Therapy That Empowers You to Heal and Grow
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto font-medium text-lightMain1 mb-2">
            Begin your journey toward overcoming anxiety, improving
            relationships, and finding lasting peace.
          </p>
          <p className="text-lg lg:text-xl font-extrabold text-lightMain1 mb-2">
            I want to work with you for…
          </p>
          <div className="h-7 w-full overflow-hidden relative">
            <p
              id="emp"
              className="text-lg absolute top-0 left-0 w-full lg:text-xl font-extrabold text-main1 items-center justify-center flex gap-2"
            >
              <Zap className="w-5 h-5" /> Empowerment
            </p>
            <p
              id="con"
              className="text-lg absolute top-0 left-0 w-full lg:text-xl font-extrabold text-main1 items-center justify-center flex gap-2"
            >
              <Users className="w-5 h-5" /> Connection
            </p>
            <p
              id="well"
              className="text-lg absolute top-0 left-0 w-full lg:text-xl font-extrabold text-main1 items-center justify-center flex gap-2"
            >
              <Heart className="w-5 h-5" /> Personal Wellbeing
            </p>
          </div>
          <p className="text-xs flex items-center gap-1.5 font-bold text-lightMain1 text-left my-6">
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
            href="/start"
            className="flex w-max items-center rounded-xl bg-rainbow bg-gradient-to-b from-blue-100 to-white relative mx-auto px-6 py-2.5 text-lg"
          >
            <Sparkles width={24} height={24} className="inline h-5 w-5 mr-2" />
            Start Healing Today
          </Link>
        </div>
      </header>

      <section
        ref={statsRef}
        className="p-8 md:px-[10%] md:py-16 xl:py-20 grid gap-12 md:grid-cols-2 md:gap-16 bg-darkMain1/90 text-center md:text-left"
      >
        <div className="text-sm text-lightMain1/80 grid gap-2">
          <strong className="text-5xl font-extrabold text-lightMain1">
            <span id="years">{years}</span>+
          </strong>
          <b className="font-semibold xl:text-xl text-lightMain1">
            Years Experience
          </b>
          Offering empathetic and successful Individual and Couples Therapy
        </div>
        <div className="text-sm text-lightMain1/80 grid gap-2">
          <strong className="text-5xl font-extrabold text-lightMain1">
            <span id="clients">{sessions}</span>+
          </strong>
          <b className="font-semibold xl:text-xl text-lightMain1">
            Happy Clients
          </b>
          Assisting people and couples in finding their purpose, growing, and
          healing
        </div>
      </section>

      <section className="relative p-4 py-12 md:py-16 lg:py-28 md:px-[10%] bg-lightMain1">
        <h1 className="font-bold mb-2 text-4xl md:text-5xl xl:text-6xl text-darkMain1 pb-4 text-center md:text-left md:mb-12">
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
                src="/individual.jpeg"
                alt="Individual Therapy"
                width={500}
                height={500}
                className="rounded w-full object-cover aspect-4/3"
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
                src="/couples.jpg"
                alt="Couples Therapy"
                width={500}
                height={500}
                className="rounded w-full object-cover aspect-4/3"
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

      <section className="bg-darkMain1 py-12 xl:py-20 px-4 md:px-[10%] flex flex-col gap-6 lg:flex-row lg:gap-3 text-main1 justify-center items-center">
        <h1 className="text-4xl font-bold">Schedule a Consultation</h1>
        <p className="font-bold text-lg xl:text-xl text-center">
          Serena Blake is accepting new clients. Available for both in-person
          and virtual sessions.
        </p>

        <Link
          href="/start"
          className="flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors h-10 px-4 py-2 text-md lg:text-lg lg:p-6 border-2 text-main1 border-lightMain1 hover:bg-lightMain1 hover:text-darkMain1"
        >
          <Sparkles width={24} height={24} className="inline h-5 w-5 mr-2" />
          Start Healing
        </Link>
      </section>

      <section
        id="about"
        className="bg-main1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] grid lg:grid-cols-2 items-center gap-3 lg:gap-0"
      >
        <div className="relative !w-[70vw] !h-[400px] sm:!w-[70vw] sm:!h-[88] md:!h-[400px] md:!w-[300px] lg:!w-[400px] justify-self-center lg:!h-[600px] bg-[url('/headshot.jpg')] rounded-[5%] border-10 border-[#daf5f1] bg-cover bg-center">
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
            About Serena Blake - Experienced Clinical Psychologist in Los
            Angeles, CA
          </span>
          <h1 className="text-4xl font-bold lg:text-5xl">
            Hi I&apos;m Serena Blake
          </h1>
          <p className="leading-relaxed mt-4 text-lg md:text-xl lg:text-2xl font-medium">
            With over <b>8 years of experience</b> and more than{" "}
            <b>500 successful client sessions</b>, I am honored to work with
            individuals and couples from diverse backgrounds, life stages, and
            personal challenges. My mission is to support you in finding
            credibility within your own story and to guide you toward{" "}
            <b>evidence-based pathways to healing and personal growth.</b>
          </p>
          <p className="leading-relaxed mt-4 text-lg md:text-xl lg:text-2xl font-medium">
            My therapeutic approach blends <b>cognitive-behavioral therapy</b>,
            <b>mindfulness</b>, and a{" "}
            <b>compassionate, person-centered philosophy</b>. I am dedicated to
            helping you <b>reduce anxiety</b>,{" "}
            <b>build stronger relationships</b>, and <b>heal from trauma</b> in
            a safe and empowering environment.
          </p>
          <p className="leading-relaxed mt-4 text-lg md:text-xl lg:text-2xl font-medium">
            Whether you are looking to move beyond patterns that no longer serve
            you, strengthen your emotional resilience, or create more meaningful
            connections, I am here to walk alongside you on this transformative
            journey. Together, we can work toward{" "}
            <b>your goals and a more fulfilling, balanced life</b>.
          </p>
        </div>
      </section>
      <section
        id="testimonials"
        className="bg-main1 p-4 pb-12 md:pb-16 lg:pb-28 md:px-[10%] grid gap-8"
      >
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

      <section className="bg-lightMain1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] text-darkMain1">
        <h1 className="text-4xl font-bold lg:text-5xl">Latest Blogs</h1>
        <p className="mt-2 lg:mt-3 text-lg leading-8 max-w-2xl">
          Discover helpful insights and strategies from Serena Blake to enhance
          your personal wellbeing and relationships.
        </p>
        <div className="mt-10 border-t border-gray-200 pt-10 text-xl font-para text-gray-600 text-center">
          No posts available at the moment.
        </div>
      </section>

      <section
        id="faq"
        className="bg-main1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] text-darkMain1"
      >
        <h1 className="font-bold text-4xl md:text-6xl pb-2 md:pb-4">
          Frequently Asked Questions
        </h1>
        <div className="grid gap-2 mt-6">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQ === index}
              onToggle={() => handleToggleFAQ(index)}
            />
          ))}
        </div>
      </section>

      <section className="relative">
        <Image
          ref={flowerRef}
          src="/flower.webp"
          alt="Flower"
          width={100}
          height={100}
          className="absolute md:!h-18 md:!w-18 lg:!h-20 lg:!w-20 -top-10 right-8 md:!right-12"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5236750549375!2d-118.4511830238089!3d34.00476657317493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2baf0f6080855%3A0x86d0e86efd5ecc4!2sMaplewood%20Ave%2C%20Los%20Angeles%2C%20CA%2090066%2C%20USA!5e0!3m2!1sen!2sin!4v1751384129701!5m2!1sen!2sin"
          className="w-full h-100"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="grid grid-cols-2 bg-main1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%] "></section>
    </>
  );
}
