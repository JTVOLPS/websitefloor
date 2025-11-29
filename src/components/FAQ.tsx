'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How long does it take to get started?",
    answer: "You can be up and running in less than 15 minutes. Our onboarding wizard walks you through the entire setup process, and our team is available to help if you need any assistance.",
  },
  {
    question: "Do I need any technical skills to use TradeFlow?",
    answer: "Not at all! TradeFlow is designed specifically for trade professionals, not tech experts. If you can use email and a smartphone, you can use TradeFlow. Plus, we offer free training and support.",
  },
  {
    question: "Can I import my existing contacts and leads?",
    answer: "Yes! You can easily import contacts from spreadsheets, other CRMs, or even your phone. We support CSV imports and have direct integrations with popular tools.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple support channels including live chat, email, phone support, and a comprehensive knowledge base. Our support team understands the trades industry and can help you get the most out of TradeFlow.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contracts required. You can cancel anytime with no cancellation fees. We believe in earning your business every month.",
  },
  {
    question: "How does TradeFlow compare to other CRMs?",
    answer: "Unlike generic CRMs, TradeFlow is built specifically for trade businesses. We understand the unique workflows of roofing, HVAC, plumbing, and contracting businesses, so you get features that actually make sense for your work.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to contact us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 transform text-gray-400 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
