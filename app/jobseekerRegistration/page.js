"use client";
import React, { useState } from "react";
import { Mail, Phone, Lock, Eye, EyeOff, UserPlus, User } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/registerAction/registerAction";

export default function RegisterPage() {
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
    <div className="min-h-screen bg-slate-900 px-[10%] py-10 text-slate-300 cursor-default flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl text-slate-400 font-light tracking-widest leading-normal mb-4">
            CREATE YOUR <span className="text-[#08CB00]">ACCOUNT</span>
          </h1>
          <p className="text-lg text-slate-400 font-light tracking-wide">
            Join us to build your professional future
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-8">
          <form action={registerUser}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Name
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="Name"
                    required
                  />
                </div>
                <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                  Email or Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="loginInfo"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-300 focus:border-[#08CB00] focus:outline-none transition-colors duration-300"
                    placeholder="Email or Phone number"
                    required
                  />
                </div>
              </div>
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
              <input type="hidden" name="role" value="JobSeeker" />
              <div className="text-xs text-slate-400 tracking-wide leading-relaxed bg-slate-700/30 rounded-lg p-4">
                Password should contain:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                </ul>
              </div>
              <SubmitButton />
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
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
            <p className="mt-1 text-xs text-slate-500">Account creation</p>
          </div>
          <div className="px-6">
            <p className="text-2xl text-[#08CB00]">Secure</p>
            <p className="mt-1 text-xs text-slate-500">Data protection</p>
          </div>
          <div className="px-6">
            <p className="text-2xl text-[#08CB00]">Instant</p>
            <p className="mt-1 text-xs text-slate-500">Account activation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
