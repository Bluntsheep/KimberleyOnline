"use client";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Phone, Lock, Eye, EyeOff, Building2, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CompanyRegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        className="w-full bg-[#08CB00] text-black py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300 flex items-center justify-center space-x-2 tracking-wider"
        type="submit"
        disabled={pending}>
        {pending ? "Registering..." : "Register"}
      </button>
    );
  }

  const handleToLogin = () => {
    router.push("login");
  };

  return (
    <div className="min-h-screen bg-slate-900 px-[10%] py-10 text-slate-300 cursor-default flex items-center justify-center my-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl text-slate-400 font-light tracking-widest leading-normal mb-4">
            REGISTER YOUR <span className="text-[#08CB00]">COMPANY</span>
          </h1>
          <p className="text-lg text-slate-400 font-light tracking-wide">
            Connect with top talent and build your team
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-8">
          <form>
            <div className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                    required
                  />
                </div>
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Contact Person
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="contactPerson"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="Contact person's full name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="company@example.com"
                    required
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Contact Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    name="contactNumber"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="+27 12 345 6789"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-12 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-300">
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Hidden Role Field - for display purposes */}
              <div className="hidden">
                <input type="hidden" value="Employer" />
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-slate-400 tracking-wide leading-relaxed bg-slate-700/30 rounded-lg p-4">
                Password should contain:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                </ul>
              </div>

              {/* Company Info Notice */}
              {/* <div className="text-xs text-slate-400 tracking-wide leading-relaxed bg-[#08CB00]/10 border border-[#08CB00]/30 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <UserCheck className="w-4 h-4 text-[#08CB00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#08CB00] font-medium mb-1">Company Verification</p>
                    <p>Your company details will be verified within 24-48 hours. You'll receive an email confirmation once approved.</p>
                  </div>
                </div>
              </div> */}

              <SubmitButton />
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Already have a company account?{" "}
              <button
                onClick={handleToLogin}
                className="text-[#08CB00] hover:text-[#06A800] transition-colors duration-300 font-medium tracking-wide">
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center mt-10 font-light tracking-wider text-center divide-x divide-slate-500">
          <div className="px-6">
            <p className="text-2xl text-[#08CB00]">Free</p>
            <p className="mt-1 text-xs text-slate-500">Company registration</p>
          </div>
          <div className="px-6">
            <p className="text-2xl text-[#08CB00]">Verified</p>
            <p className="mt-1 text-xs text-slate-500">Company profiles</p>
          </div>
          <div className="px-6">
            <p className="text-2xl text-[#08CB00]">24/7</p>
            <p className="mt-1 text-xs text-slate-500">Support available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
