import React, { useState } from "react";
import minu from "../assets/minu.svg";
import plus from "../assets/plus.svg";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item text-black" onClick={onClick}>
      <div className="faq-question text-black r p-4 md:w-[80%] m-auto cursor-pointer space-y-3">
        <div className="flex justify-between align-middle items-center m-auto">
          <span className="text-[15px]  text-black sm:text-[20px] ms:text-[24px] pb-4 font-bold sm:font-semibold">
            {question}
          </span>
          <span>
            {isOpen ? (
              <img className="max-w-[20px] xs:max-w-auto" src={minu} alt="" />
            ) : (
              <img className="max-w-[20px] xs:max-w-auto" src={plus} alt="" />
            )}
          </span>
        </div>
        <div className={isOpen ? "faq-answer text-black" : "faq-answer hidden"}>
          <p className="text- text-left text-sm font-normal">{answer}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
const FaqAccordion = () => {
  const [isOpenState, setIsOpenState] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpenState((prevState) => (prevState === index ? null : index));
  };

  const Faqs = [
    {
      id: 1,
      question: "How do we raise our chickens?",
      answer:
        "Our chickens roam freely on lush pastures, ensuring they are healthy and stress-free.",
    },
    {
      id: 2,
      question: "What makes our eggs different?",
      answer:
        "Our eggs come from pasture-raised hens, providing superior taste and nutrition.",
    },
    {
      id: 3,
      question: "Can I visit the farm?",
      answer:
        "Yes, we welcome visitors to experience our farm firsthand.",
    },
    {
      id: 4,
      question: "How can I contact customer support?",
      answer:
        "You can reach us anytime via info@mysite.com",
    },
  ];

  return (
    <div>
      {Faqs.map((faq, i) => (
        <FaqItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={isOpenState === i}
          onClick={() => toggleAccordion(i)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;