"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});
  const router = useRouter();

  const handleNavigateContactUs = () => {
    router.push("/contactus");
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How do I create my profile on Kimberley Online?",
          answer:
            "Creating your profile is simple! Click 'Create CV' on our homepage, fill in your personal details, work experience, education, and skills. Our intuitive builder guides you through each step to create a professional digital CV that stands out to employers.",
        },
        {
          question: "Is Kimberley Online free for job seekers?",
          answer:
            "Yes! Creating your profile and applying for jobs is completely free for job seekers. You can build your CV, browse job listings, and apply to positions without any cost.",
        },
        {
          question: "How long does it take to set up my profile?",
          answer:
            "Most users complete their profile in 10-15 minutes. You can save your progress and return to finish it later if needed.",
        },
        {
          question: "Can I edit my profile after creating it?",
          answer:
            "Absolutely! You can update your profile information, add new skills, update your work experience, and modify your CV at any time through your dashboard.",
        },
      ],
    },
    {
      title: "For Job Seekers",
      icon: "👥",
      questions: [
        {
          question: "What types of jobs are available in Kimberley?",
          answer:
            "We feature opportunities across various sectors including mining, retail, hospitality, healthcare, education, administration, and skilled trades. Our platform focuses specifically on the Kimberley job market.",
        },
        {
          question: "How will employers find my profile?",
          answer:
            "Employers can search our talent database using keywords, skills, experience level, and location filters. Having a complete profile with relevant keywords increases your visibility.",
        },
        {
          question: "How do I know if an employer has viewed my profile?",
          answer:
            "You'll receive notifications when employers view your profile or express interest in your application. You can track this activity in your dashboard.",
        },
        {
          question: "Can I apply for multiple jobs at once?",
          answer:
            "Yes! You can apply for as many suitable positions as you'd like. We recommend tailoring your application for each specific role when possible.",
        },
      ],
    },
    {
      title: "For Employers",
      icon: "🏢",
      questions: [
        {
          question: "How much does it cost to post a job?",
          answer:
            "Our pricing starts at R299/month for the Starter plan (3 job postings), R599/month for Professional (10 postings), and R1199/month for Enterprise (unlimited). Annual plans offer 17% savings.",
        },
        {
          question: "How long do job postings stay active?",
          answer:
            "Job postings remain active for 30 days by default. You can extend, pause, or reactivate postings as needed through your employer dashboard.",
        },
        {
          question: "Can I search and contact candidates directly?",
          answer:
            "Yes! All paid plans include access to our candidate database where you can search profiles and contact potential hires directly, even if they haven't applied to your specific job posting.",
        },
        {
          question: "What support do you provide for employers?",
          answer:
            "We offer email support for all plans, with phone support for Professional and Enterprise plans. Enterprise customers get a dedicated account manager and priority support.",
        },
        {
          question: "Do you verify candidate qualifications?",
          answer:
            "While we encourage candidates to provide accurate information, employers are responsible for verifying qualifications during their hiring process. We provide tools to help you assess candidates effectively.",
        },
      ],
    },
    {
      title: "Platform Features",
      icon: "⚙️",
      questions: [
        {
          question:
            "What makes Kimberley Online different from other job sites?",
          answer:
            "We focus exclusively on the Kimberley job market, providing local expertise and connections. Our platform is designed specifically for the unique needs of Northern Cape businesses and job seekers.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we take data security seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
        },
        {
          question: "Can I use Kimberley Online on my mobile phone?",
          answer:
            "Absolutely! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers.",
        },
        {
          question: "Do you offer integration with other HR systems?",
          answer:
            "Enterprise plans include API access and custom integrations. Contact our sales team to discuss specific integration requirements for your organization.",
        },
      ],
    },
    {
      title: "Billing & Support",
      icon: "💳",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, EFT, and direct bank transfers. Enterprise customers can also arrange for invoicing and purchase orders.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 7-day money-back guarantee for new customers. Contact our support team if you're not satisfied with our service.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach us via email at support@kimberleyonline.co.za or through the contact form on our website. Professional and Enterprise customers also have access to phone support.",
        },
        {
          question: "Do you offer training for using the platform?",
          answer:
            "Yes! We provide onboarding sessions for Enterprise customers and have comprehensive help documentation and video tutorials available for all users.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 px-[10%] py-20 mt-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4 md:px-48">
        <p className="text-4xl md:text-5xl text-slate-400 font-light tracking-widest leading-normal mb-6">
          FREQUENTLY ASKED <span className="text-[#08CB00]">QUESTIONS.</span>
        </p>
        <p className="mb-10 text-lg text-slate-400 font-light tracking-widest leading-normal">
          Everything you need to know about Kimberley Online.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12 flex justify-center">
        {/* <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-6 py-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-5 h-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div> */}
      </div>

      {/* FAQ Categories */}
      <div className="space-y-12">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center mb-8 border-b border-slate-600 pb-4">
              <span className="text-2xl mr-4">{category.icon}</span>
              <h2 className="text-2xl font-light tracking-wider text-slate-300">
                {category.title}
              </h2>
            </div>

            {/* Questions in Category */}
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => {
                const itemIndex = `${categoryIndex}-${faqIndex}`;
                const isOpen = openItems[itemIndex];

                return (
                  <div
                    key={faqIndex}
                    className="border border-slate-600 rounded-lg bg-slate-800/30 overflow-hidden transition-all duration-300 hover:border-slate-500">
                    <button
                      onClick={() => toggleItem(itemIndex)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group">
                      <span className="text-slate-300 font-medium tracking-wide group-hover:text-[#08CB00] transition-colors duration-300">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#08CB00]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}>
                      <div className="px-6 pb-5 border-t border-slate-700">
                        <p className="text-slate-400 leading-relaxed tracking-wide pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support Section */}
      <div className="mt-16 text-center">
        <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-12">
          <p className="text-2xl text-slate-300 font-light tracking-wider mb-4">
            Still have questions?
          </p>
          <p className="text-slate-400 mb-8 tracking-wide">
            Our support team is here to help you succeed on Kimberley Online.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={handleNavigateContactUs}
              className="bg-[#08CB00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
              Contact Support
            </button>
            <button className="bg-[#00cbc4] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
              Schedule a Demo
            </button>
            <button className="bg-transparent border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-[#08CB00] hover:text-[#08CB00] transition-colors duration-300">
              Help Center
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex justify-center mt-16 font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">24/7</p>
          <p className="mt-2 text-sm text-slate-500">Support Available</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]"> 2hrs</p>
          <p className="mt-2 text-sm text-slate-500">Average Response Time</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">98%</p>
          <p className="mt-2 text-sm text-slate-500">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
