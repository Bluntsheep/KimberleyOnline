"use client";
import React, { useState } from "react";

const TermsConditionsPage = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: "📋" },
    { id: "definitions", title: "Definitions", icon: "📚" },
    { id: "services", title: "Description of Services", icon: "🔧" },
    { id: "registration", title: "User Registration", icon: "👤" },
    { id: "conduct", title: "User Conduct", icon: "⚖️" },
    { id: "content", title: "Content and Intellectual Property", icon: "©️" },
    { id: "privacy", title: "Privacy and Data Protection", icon: "🔒" },
    { id: "payment", title: "Payment Terms", icon: "💳" },
    { id: "liability", title: "Limitation of Liability", icon: "⚠️" },
    { id: "termination", title: "Termination", icon: "🚪" },
    { id: "governing", title: "Governing Law", icon: "⚖️" },
    { id: "contact", title: "Contact Information", icon: "📞" },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 mt-16">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="fixed left-0 top-16 w-80 h-screen bg-slate-900 border-r border-slate-600 overflow-y-auto z-40 hidden lg:block">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#08CB00] mb-6 tracking-wider">
              TABLE OF CONTENTS
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === section.id
                      ? "bg-[#08CB00] text-black font-semibold"
                      : "hover:bg-slate-800 text-slate-400 hover:text-slate-300"
                  }`}>
                  <span className="text-sm">{section.icon}</span>
                  <span className="text-sm">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="px-[10%] py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-4xl md:text-5xl text-slate-400 font-light tracking-widest leading-normal mb-6">
                TERMS AND <span className="text-[#08CB00]">CONDITIONS.</span>
              </p>
              <p className="mb-8 text-lg text-slate-400 font-light tracking-widest leading-normal">
                Please read these terms carefully before using our platform.
              </p>
              <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 max-w-4xl mx-auto">
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-[#08CB00]">Last Updated:</strong>{" "}
                  August 17, 2025
                  <br />
                  <strong className="text-[#08CB00]">
                    Effective Date:
                  </strong>{" "}
                  August 17, 2025
                </p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Section 1: Acceptance of Terms */}
              <section
                id="acceptance"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  1. ACCEPTANCE OF TERMS
                </h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Welcome to Kimberley Online ("we," "our," or "us"). These
                    Terms and Conditions ("Terms") govern your use of our
                    website, mobile application, and services (collectively, the
                    "Platform").
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    By accessing or using our Platform, you agree to be bound by
                    these Terms. If you disagree with any part of these Terms,
                    you may not access or use our Platform.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    We reserve the right to update these Terms at any time.
                    Continued use of the Platform after changes constitutes
                    acceptance of the new Terms.
                  </p>
                </div>
              </section>

              {/* Section 2: Definitions */}
              <section
                id="definitions"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  2. DEFINITIONS
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-[#08CB00]">"Platform"</strong>{" "}
                      refers to the Kimberley Online website, mobile
                      applications, and all related services.
                    </p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-[#08CB00]">"Users"</strong>{" "}
                      includes both Job Seekers and Employers who create
                      accounts on our Platform.
                    </p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-[#08CB00]">"Job Seekers"</strong>{" "}
                      are individuals seeking employment opportunities through
                      our Platform.
                    </p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-[#08CB00]">"Employers"</strong>{" "}
                      are businesses, organizations, or individuals posting job
                      opportunities on our Platform.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Description of Services */}
              <section
                id="services"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  3. DESCRIPTION OF SERVICES
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kimberley Online provides an online platform that connects job
                  seekers with employers in the Kimberley, Northern Cape region
                  of South Africa. Our services include:
                </p>
                <ul className="text-slate-400 leading-relaxed space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    CV creation and profile management tools for job seekers
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Job posting and candidate search capabilities for employers
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Communication tools between job seekers and employers
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Analytics and reporting features
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Customer support services
                  </li>
                </ul>
              </section>

              {/* Section 4: User Registration */}
              <section
                id="registration"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  4. USER REGISTRATION
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  To access certain features of our Platform, you must create an
                  account. You agree to:
                </p>
                <ul className="text-slate-400 leading-relaxed space-y-2 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Maintain and promptly update your account information
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Keep your password confidential and secure
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Be responsible for all activities under your account
                  </li>
                </ul>
                <p className="text-slate-400 leading-relaxed">
                  You must be at least 18 years old to create an account. By
                  registering, you represent and warrant that you meet this age
                  requirement.
                </p>
              </section>

              {/* Section 5: User Conduct */}
              <section
                id="conduct"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  5. USER CONDUCT
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  You agree not to use our Platform to:
                </p>
                <ul className="text-slate-400 leading-relaxed space-y-2 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Post false, misleading, or fraudulent information
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Violate any applicable laws or regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Harass, abuse, or harm other users
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Post discriminatory content based on race, gender, religion,
                    or other protected characteristics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Attempt to gain unauthorized access to our systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08CB00] mr-3">•</span>
                    Use automated tools to scrape or collect data from our
                    Platform
                  </li>
                </ul>
                <p className="text-slate-400 leading-relaxed">
                  We reserve the right to suspend or terminate accounts that
                  violate these conduct rules.
                </p>
              </section>

              {/* Section 6: Content and Intellectual Property */}
              <section
                id="content"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  6. CONTENT AND INTELLECTUAL PROPERTY
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  <strong className="text-[#08CB00]">Your Content:</strong> You
                  retain ownership of content you post on our Platform. By
                  posting content, you grant us a non-exclusive, worldwide,
                  royalty-free license to use, display, and distribute your
                  content in connection with our services.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  <strong className="text-[#08CB00]">Our Content:</strong> All
                  Platform content, including design, text, graphics, logos, and
                  software, is owned by Kimberley Online and protected by
                  intellectual property laws.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  You may not copy, modify, or distribute our content without
                  written permission.
                </p>
              </section>

              {/* Section 7: Privacy and Data Protection */}
              <section
                id="privacy"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  7. PRIVACY AND DATA PROTECTION
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We are committed to protecting your privacy and complying with
                  the Protection of Personal Information Act (POPIA) and other
                  applicable privacy laws.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Our Privacy Policy, which forms part of these Terms, details
                  how we collect, use, and protect your personal information. By
                  using our Platform, you consent to our privacy practices as
                  described in our Privacy Policy.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  You have the right to access, correct, or delete your personal
                  information. Contact us if you wish to exercise these rights.
                </p>
              </section>

              {/* Section 8: Payment Terms */}
              <section
                id="payment"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  8. PAYMENT TERMS
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  <strong className="text-[#08CB00]">
                    Employer Subscriptions:
                  </strong>{" "}
                  Paid subscriptions are billed in advance on a monthly or
                  annual basis. All fees are in South African Rand (ZAR) and
                  exclude VAT where applicable.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  <strong className="text-[#08CB00]">Refunds:</strong> We offer
                  a 7-day money-back guarantee for new subscribers. Refunds for
                  other circumstances are at our discretion.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  <strong className="text-[#08CB00]">Late Payments:</strong> If
                  payment is not received when due, we may suspend your account
                  until payment is made.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We reserve the right to change our pricing with 30 days'
                  notice to existing subscribers.
                </p>
              </section>

              {/* Section 9: Limitation of Liability */}
              <section
                id="liability"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  9. LIMITATION OF LIABILITY
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kimberley Online provides a platform for connecting job
                  seekers and employers but is not a party to employment
                  relationships formed through our Platform.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  To the maximum extent permitted by law, we shall not be liable
                  for any indirect, incidental, special, or consequential
                  damages arising from your use of our Platform.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Our total liability to you for any claims shall not exceed the
                  amount you paid us in the 12 months preceding the claim.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We do not guarantee job placement or hiring success and make
                  no warranties about the accuracy of user-posted content.
                </p>
              </section>

              {/* Section 10: Termination */}
              <section
                id="termination"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  10. TERMINATION
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us or
                  using the account deletion feature in your dashboard.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We may suspend or terminate your account immediately if you
                  violate these Terms or for any other reason at our discretion.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Upon termination, your right to use the Platform ceases
                  immediately, but these Terms shall remain in effect regarding
                  your past use of the Platform.
                </p>
              </section>

              {/* Section 11: Governing Law */}
              <section
                id="governing"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  11. GOVERNING LAW
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  These Terms are governed by and construed in accordance with
                  the laws of South Africa.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Any disputes arising from these Terms or your use of our
                  Platform shall be subject to the exclusive jurisdiction of the
                  courts of South Africa.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We encourage users to contact us first to resolve any disputes
                  before pursuing legal action.
                </p>
              </section>

              {/* Section 12: Contact Information */}
              <section
                id="contact"
                className="border-l-4 border-[#08CB00] pl-8">
                <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
                  12. CONTACT INFORMATION
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  If you have any questions about these Terms or our Platform,
                  please contact us:
                </p>
                <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                  <p className="text-slate-400 leading-relaxed">
                    <strong className="text-[#08CB00]">Email:</strong>{" "}
                    legal@kimberleyonline.co.za
                    <br />
                    <strong className="text-[#08CB00]">Phone:</strong> +27 (0)53
                    123 4567
                    <br />
                    <strong className="text-[#08CB00]">Address:</strong> 123
                    Diamond Street, Kimberley, 8301, Northern Cape, South Africa
                    <br />
                    <strong className="text-[#08CB00]">
                      Business Hours:
                    </strong>{" "}
                    Monday - Friday, 8:00 AM - 5:00 PM SAST
                  </p>
                </div>
              </section>
            </div>

            {/* Footer CTA */}
            <div className="text-center mt-16">
              <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-12 max-w-4xl mx-auto">
                <p className="text-2xl text-slate-300 font-light tracking-wider mb-4">
                  Questions about our Terms?
                </p>
                <p className="text-slate-400 mb-8 tracking-wide">
                  Our legal team is here to help clarify any concerns you may
                  have.
                </p>
                <div className="flex gap-6 justify-center flex-wrap">
                  <button className="bg-[#08CB00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
                    Contact Legal Team
                  </button>
                  <button className="bg-transparent border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-[#08CB00] hover:text-[#08CB00] transition-colors duration-300">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
