"use client";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import React, { useState } from "react";

const LoginPage = () => {
  const [loginType, setLoginType] = useState("JobSeeker");
  const [formData, setFormData] = useState({
    loginInfo: "",
    password: "",
    role: loginType,
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = () => {
    if (loginType === "JobSeeker") {
      router.push("/jobseekerRegistration");
    } else {
      router.push("/companyRegistration");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginStatus("");

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login
      setLoginStatus("success");
    }, 2000);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log("Forgot password clicked");
  };

  const handleSocialLogin = (provider) => {
    // Handle social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 mt-16">
      <div className="flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light text-slate-300 tracking-wider mb-4">
                WELCOME BACK
              </h1>
              <p className="text-slate-400 tracking-wide">
                Sign in to your Kimberley Online account
              </p>
            </div>

            {/* User Type Toggle */}
            <div className="mb-8">
              <div className="bg-slate-800 rounded-full p-1 flex">
                <button
                  onClick={() => setLoginType("JobSeeker")}
                  className={`flex-1 py-3 px-6 rounded-full transition-all duration-300 text-sm font-semibold ${
                    loginType === "JobSeeker"
                      ? "bg-[#08CB00] text-black"
                      : "text-slate-400 hover:text-slate-300"
                  }`}>
                  Job Seeker
                </button>
                <button
                  onClick={() => setLoginType("Employer")}
                  className={`flex-1 py-3 px-6 rounded-full transition-all duration-300 text-sm font-semibold ${
                    loginType === "Employer"
                      ? "bg-[#08CB00] text-black"
                      : "text-slate-400 hover:text-slate-300"
                  }`}>
                  Employer
                </button>
              </div>
            </div>

            {/* Success Message */}
            {loginStatus === "success" && (
              <div className="bg-[#08CB00]/20 border border-[#08CB00] rounded-lg p-4 mb-6">
                <p className="text-[#08CB00] font-semibold text-center">
                  Login successful! Redirecting...
                </p>
              </div>
            )}

            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                  EMAIL ADDRESS OR PHONE NUMBER
                </label>
                <input
                  type="email"
                  name="loginInfo"
                  value={formData.loginInfo}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                  placeholder="Enter your email address or phone number"
                />
              </div>

              <div>
                <label className="block text-sm text-[#08CB00] mb-2 tracking-wider">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 pr-12 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#08CB00] transition-colors duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-300">
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#08CB00] bg-slate-700 border-slate-600 rounded focus:ring-[#08CB00] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-slate-400">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#08CB00] hover:text-[#06A800] transition-colors duration-300">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-[#08CB00] text-black py-3 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? "Signing In..." : "Sign In"}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-slate-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              {/* <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleSocialLogin("google")}
                  className="flex items-center justify-center px-4 py-3 border border-slate-600 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300">
                  <span className="mr-2">🔍</span>
                  <span className="text-sm text-slate-300">Google</span>
                </button>
                <button
                  onClick={() => handleSocialLogin("linkedin")}
                  className="flex items-center justify-center px-4 py-3 border border-slate-600 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300">
                  <span className="mr-2">💼</span>
                  <span className="text-sm text-slate-300">LinkedIn</span>
                </button>
              </div> */}

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-slate-400">
                  {"Don't have an account? "}
                  <button
                    onClick={handleRegister}
                    className="text-[#08CB00] hover:text-[#06A800] font-semibold transition-colors duration-300">
                    {loginType === "JobSeeker"
                      ? " Create your CV"
                      : " Sign up as Employer"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Brand & Features */}
        <div className="hidden lg:flex flex-1 bg-slate-900 items-center justify-center px-12">
          <div className="max-w-lg text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h2 className="text-4xl font-light text-slate-300 tracking-widest mb-4">
                KIMBERLEY
              </h2>
              <h3 className="text-2xl font-light text-[#08CB00] tracking-widest">
                ONLINE
              </h3>
              <p className="text-slate-400 mt-4 tracking-wide">
                Your platform for employment in Kimberley
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {loginType === "JobSeeker" ? (
                <>
                  <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
                    <p className="text-sm text-[#08CB00] tracking-wider">
                      FOR JOB SEEKERS
                    </p>
                    <p className="text-slate-300">
                      Build Your Professional Profile
                    </p>
                    <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
                      Create a stunning digital CV and get discovered by top
                      employers in Kimberley.
                    </p>
                  </div>
                  <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
                    <p className="text-sm text-[#08CB00] tracking-wider">
                      OPPORTUNITIES
                    </p>
                    <p className="text-slate-300">Access 100+ Job Listings</p>
                    <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
                      Browse exclusive job opportunities from verified employers
                      in your area.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
                    <p className="text-sm text-[#08CB00] tracking-wider">
                      FOR EMPLOYERS
                    </p>
                    <p className="text-slate-300">Find Quality Talent</p>
                    <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
                      Access a curated pool of 300+ qualified candidates in
                      Kimberley.
                    </p>
                  </div>
                  <div className="flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-4">
                    <p className="text-sm text-[#08CB00] tracking-wider">
                      EFFICIENCY
                    </p>
                    <p className="text-slate-300">Streamlined Hiring Process</p>
                    <p className="text-xs text-slate-400 tracking-wider leading-relaxed">
                      Post jobs, review applications, and hire faster with our
                      advanced tools.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl text-[#08CB00] font-light">300+</p>
                  <p className="text-xs text-slate-500 mt-1">Job Seekers</p>
                </div>
                <div>
                  <p className="text-2xl text-[#08CB00] font-light">50+</p>
                  <p className="text-xs text-slate-500 mt-1">Companies</p>
                </div>
                <div>
                  <p className="text-2xl text-[#08CB00] font-light">1200+</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Successful Hires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Brand Section */}
      <div className="lg:hidden bg-slate-900 px-8 py-12 text-center">
        <h2 className="text-2xl font-light text-slate-300 tracking-widest mb-2">
          KIMBERLEY ONLINE
        </h2>
        <p className="text-slate-400 tracking-wide mb-8">
          Your platform for employment in Kimberley
        </p>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xl text-[#08CB00] font-light">300+</p>
            <p className="text-xs text-slate-500 mt-1">Job Seekers</p>
          </div>
          <div>
            <p className="text-xl text-[#08CB00] font-light">50+</p>
            <p className="text-xs text-slate-500 mt-1">Companies</p>
          </div>
          <div>
            <p className="text-xl text-[#08CB00] font-light">1200+</p>
            <p className="text-xs text-slate-500 mt-1">Successful Hires</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
