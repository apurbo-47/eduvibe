"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    question: "What programs does the university offer?",
    answer:
      "Our university offers a wide range of undergraduate and postgraduate programs designed to meet academic and industry needs. Each program focuses on practical learning, research, and career readiness.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply through our online portal by submitting your transcripts, personal statement, and required test scores.",
  },
  {
    question: "Is financial aid or scholarship available?",
    answer:
      "Yes, we offer various merit-based and need-based scholarships to support our students' educational journey.",
  },
  {
    question: "Is financial aid or scholarship available?",
    answer:
      "Yes, we offer various merit-based and need-based scholarships to support our students' educational journey.",
  },

  // Add more items as needed...
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start gap-4 text-left transition-colors hover:bg-gray-50/50 rounded-lg px-2"
      >
        <div className="mt-1 bg-indigo-500 p-1.5 rounded-md">
          <HelpCircle size={18} className="text-white" />
        </div>
        <span className="flex-1 font-bold text-gray-900 leading-tight pt-1">
          {question}
        </span>
        <div className="mt-1 text-gray-400">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-5 md:pl-13 pr-8 text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-5 py-10 md:py-0 flex flex-col lg:flex-row gap-5 md:gap-10 items-center">
      {/* Left Content: FAQ Accordion */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 md:mb-10 leading-[1.1]">
          Have Questions? We’re
          <br />
          Here to Help
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-2 md:p-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>

      {/* Right Content: Image */}
      <div className="w-full lg:w-1/2 relative">
        <div className=" overflow-hidden ">
          <Image
            src="/images/faqImage.png"
            alt="University Campus"
            width={500}
            height={500}
            className="w-full h-auto object-cover md:min-h-screen"
          />
        </div>
        {/* Subtle purple glow effect similar to the image */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200/30 blur-3xl rounded-full -z-10" />
      </div>
    </section>
  );
}
