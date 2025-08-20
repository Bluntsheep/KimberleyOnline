"use client";
import { contactData } from "@/data/pricing details/contacktData/contactData";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "",
    subject: "",
    message: "",
    priority: "normal",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        userType: "",
        subject: "",
        message: "",
        priority: "normal",
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      contact: contactData.email,
      response: "Response within 2-4 hours",
      action: "Send Email",
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak with our team",
      contact: contactData.contactNumber,
      response: "Monday - Friday, 8AM - 5PM",
      action: "Call Now",
    },
    // {
    //   icon: "💬",
    //   title: "Live Chat",
    //   description: "Chat with us instantly",
    //   contact: "Available on website",
    //   response: "Average response: 30 seconds",
    //   action: "Start Chat",
    // },
    // {
    //   icon: "🏢",
    //   title: "Office Visit",
    //   description: "Visit our Kimberley office",
    //   contact: "123 Diamond Street, Kimberley",
    //   response: "By appointment only",
    //   action: "Get Directions",
    // },
  ];

  const departments = [
    {
      name: "General Support",
      email: contactData.emailGeneralSupport,
      description: "Account help, technical issues, general questions",
    },
    {
      name: "Sales Team",
      email: contactData.emailSales,
      description: "Pricing, demos, enterprise solutions",
    },
    {
      name: "Technical Support",
      email: contactData.emailTechnical,
      description: "Platform bugs, integration issues, API support",
    },
    {
      name: "Legal & Compliance",
      email: contactData.emailLegal,
      description: "Terms, privacy, compliance matters",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 px-[10%] py-20 mt-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4 md:px-48">
        <p className="text-4xl md:text-5xl text-slate-400 font-light tracking-widest leading-normal mb-6">
          GET IN <span className="text-[#08CB00]">TOUCH.</span>
        </p>
        <p className="mb-10 text-lg text-slate-400 font-light tracking-widest leading-normal">
          {"We're here to help you succeed on Kimberley Online."}
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 hover:border-[#08CB00] transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-3xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-slate-300 mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {method.description}
              </p>
              <p className="text-[#08CB00] font-medium mb-2">
                {method.contact}
              </p>
              <p className="text-xs text-slate-500 mb-4">{method.response}</p>
              <button className="bg-[#08CB00] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300 text-sm">
                {method.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div>
          <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
            <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
              SEND US A MESSAGE
            </h2>

            {submitStatus === "success" && (
              <div className="bg-[#08CB00]/20 border border-[#08CB00] rounded-lg p-4 mb-6">
                <p className="text-[#08CB00] font-semibold">
                  Message sent successfully!
                </p>
                <p className="text-slate-400 text-sm">
                  {"We'll get back to you within 2-4 hours."}
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                    placeholder="+27 12 345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    I AM A *
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-[#08CB00] transition-colors duration-300">
                    <option value="">Select user type</option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                    <option value="potential-customer">
                      Potential Customer
                    </option>
                    <option value="existing-customer">Existing Customer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                    PRIORITY
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-[#08CB00] transition-colors duration-300">
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300 resize-vertical"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#08CB00] text-black py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information & Departments */}
        <div className="space-y-8">
          {/* Office Information */}
          <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
            <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
              OFFICE INFORMATION
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-[#08CB00] text-xl">📍</div>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Address</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    123 Diamond Street
                    <br />
                    Kimberley, 8301
                    <br />
                    Northern Cape, South Africa
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-[#08CB00] text-xl">🕒</div>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">
                    Business Hours
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-[#08CB00] text-xl">🌍</div>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">
                    Service Area
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kimberley, Northern Cape, and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
            <h2 className="text-2xl font-light text-slate-300 mb-6 tracking-wider">
              DEPARTMENTS
            </h2>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#08CB00] pl-4 py-2">
                  <h3 className="text-slate-300 font-semibold mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-[#08CB00] text-sm mb-2">{dept.email}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Link */}
      <div className="text-center mb-16">
        <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-slate-300 mb-4 tracking-wider">
            NEED QUICK ANSWERS?
          </h2>
          <p className="text-slate-400 mb-6 tracking-wide">
            Check our FAQ section for instant answers to common questions.
          </p>
          <button className="bg-[#00cbc4] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
            Browse FAQ
          </button>
        </div>
      </div>

      {/* Response Time Stats */}
      <div className="flex justify-center font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">&lt; 2hrs</p>
          <p className="mt-2 text-sm text-slate-500">
            Average Email Response Business Hours
          </p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">&lt; 6hrs</p>
          <p className="mt-2 text-sm text-slate-500">
            Average Email Response After Hours
          </p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">24/7</p>
          <p className="mt-2 text-sm text-slate-500">Support Available</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
