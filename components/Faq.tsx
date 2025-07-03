import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function Faq({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className="border-t py-4 last:border-b border-darkMain1">
      <button
        className="w-full cursor-pointer hover:opacity-70 pl-0 flex justify-between items-center p-4 text-left text-darkMain1 font-bold text-2xl md:text-3xl transition"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown
          className={
            "w-5 h-5 text-darkMain1 transition-transform" +
            (isOpen ? " rotate-180" : "")
          }
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-xl text-darkMain1">{answer}</p>
      </div>
    </div>
  );
}
