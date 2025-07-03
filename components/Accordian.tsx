import { Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";

type Props = {
  desc: string;
  title: string;
  button: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function Accordion({ desc, title, button, isOpen, onToggle }: Props) {
  return (
    <div className="border-b border-[#e5e7eb]">
      <button
        className="flex flex-1 items-center justify-between cursor-pointer py-4 w-full"
        onClick={onToggle}
      >
        <span className="text-xl font-semibold">{title}</span>
        <ChevronDown
          className={
            "w-4 h-4 text-darkMain1 transition-transform" +
            (isOpen ? " rotate-180" : "")
          }
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="mt-3">{desc}</p>
        <Link
          href="#"
          className="flex w-max items-center gap-2 mt-4 px-4 py-2 mx-auto lg:mx-0 bg-darkMain1 text-lightMain1 rounded-xl hover:bg-main1 hover:text-darkMain1 hover:border hover:border-darkMain1"
        >
          <Calendar className="h-4 w-4" />
          {button}
        </Link>
      </div>
    </div>
  );
}
