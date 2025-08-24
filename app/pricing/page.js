"use client";

import { currentplans } from "@/data/pricing details/prigindetails";
import React, { useState } from "react";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = currentplans;

  const getPrice = (plan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 px-[10%] py-20 mt-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4 md:px-48">
        <p className="text-4xl md:text-5xl text-slate-400 font-light tracking-widest leading-normal mb-6">
          SIMPLE, TRANSPARENT <span className="text-[#08CB00]">PRICING.</span>
        </p>
        <p className="mb-2 text-lg text-slate-400 font-light tracking-widest leading-normal">
          Choose the perfect plan for your hiring needs.
        </p>
        <p className="mb-10 text-lg font-light tracking-widest leading-normal text-[#08CB00]">
          Free accounts have limited cv categories to view.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <div className="bg-slate-800 rounded-full p-1 flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-[#08CB00] text-black font-semibold"
                  : "text-slate-400 hover:text-slate-300"
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-[#08CB00] text-black font-semibold"
                  : "text-slate-400 hover:text-slate-300"
              }`}>
              Yearly
              <span className="ml-2 text-xs bg-[#00cbc4] text-black px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "border-[#08CB00] bg-slate-900 shadow-lg shadow-[#08CB00]/20"
                : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
            }`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#08CB00] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-300 mb-3">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-light text-[#08CB00]">
                  R{getPrice(plan).toLocaleString()}
                </span>
                <span className="text-slate-400 ml-2">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
                {billingCycle === "yearly" && (
                  <div className="text-sm text-[#00cbc4] mt-2">
                    Save R{getSavings(plan).toLocaleString()}/year
                  </div>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-[#08CB00] tracking-wider border-b border-slate-600 pb-3">
                FEATURES INCLUDED
              </p>
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#08CB00] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Features Comparison */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <p className="text-3xl text-slate-400 font-light tracking-widest mb-4">
            WHY CHOOSE <span className="text-[#08CB00]">KIMBERLEY ONLINE?</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
            <p className="text-sm text-[#08CB00] tracking-wider">LOCAL FOCUS</p>
            <p className="text-slate-300">Kimberley-Specific Talent</p>
            <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
              Access to a curated pool of local professionals who understand the
              unique needs of Kimberley businesses.
            </p>
          </div>

          <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
            <p className="text-sm text-[#08CB00] tracking-wider">
              COST EFFECTIVE
            </p>
            <p className="text-slate-300">Affordable Hiring Solutions</p>
            <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
              Transparent pricing with no hidden fees. Pay only for what you
              need and scale as you grow.
            </p>
          </div>

          <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
            <p className="text-sm text-[#08CB00] tracking-wider">
              PROVEN RESULTS
            </p>
            <p className="text-slate-300">1200+ Successful Matches</p>
            <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
              Our platform has already connected hundreds of job seekers with
              their perfect roles in Kimberley.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">300+</p>
          <p className="mt-2 text-sm text-slate-500">Active Job Seekers</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">50+</p>
          <p className="mt-2 text-sm text-slate-500">Partner Companies</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">98%</p>
          <p className="mt-2 text-sm text-slate-500">Client Satisfaction</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-12">
          <p className="text-2xl text-slate-300 font-light tracking-wider mb-4">
            Ready to find your next great hire?
          </p>
          <p className="text-slate-400 mb-8 tracking-wide">
            Join the companies already using Kimberley Online to build their
            teams.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-[#08CB00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="bg-transparent border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-[#08CB00] hover:text-[#08CB00] transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
