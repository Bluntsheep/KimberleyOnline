"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCVUploader = () => router.push("/cvuploader");
  const handleEmployerSignup = () => router.push("/login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl xl:text-7xl text-slate-200 font-light tracking-wider leading-tight mb-6">
            YOUR PLATFORM FOR{" "}
            <span className="text-[#08CB00] font-medium">
              EMPLOYMENT IN KIMBERLEY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-3xl mx-auto">
            The smart way to find and hire top talent
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Column - Process Steps */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#08CB00] via-slate-600 to-slate-700"></div>
              <div className="pl-8 pr-4 py-6 bg-slate-800/30 backdrop-blur-sm rounded-r-lg border-l-4 border-[#08CB00]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#08CB00] text-black text-sm font-bold rounded-full flex items-center justify-center">
                    1
                  </span>
                  <p className="text-[#08CB00] font-semibold tracking-wide">
                    CREATE YOUR PROFILE
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Job seekers effortlessly build a professional, digital CV
                  using our free, intuitive builder. Companies create an account
                  and get instant access to a curated talent pool.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-600 via-slate-600 to-slate-700"></div>
              <div className="pl-8 pr-4 py-6 bg-slate-800/30 backdrop-blur-sm rounded-r-lg border-l-4 border-[#00cbc4]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#00cbc4] text-black text-sm font-bold rounded-full flex items-center justify-center">
                    2
                  </span>
                  <p className="text-[#00cbc4] font-semibold tracking-wide">
                    SMART MATCHING
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Affordable talent solutions with exceptional results. Our
                  platform connects the right people with the right
                  opportunities efficiently.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pl-8 pr-4 py-6 bg-slate-800/30 backdrop-blur-sm rounded-r-lg border-l-4 border-slate-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-slate-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                  <p className="text-slate-300 font-semibold tracking-wide">
                    PERFECT MATCHES
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Simplify your search and find your perfect hire. Where great
                  talent finds its match through intelligent algorithms and
                  human insight.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {/* <button
                onClick={handleCVUploader}
                className="group relative overflow-hidden bg-gradient-to-r from-[#00cbc4] to-[#00a8a3] text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10">Create Professional CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a8a3] to-[#008a87] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button> */}

              <button
                onClick={handleEmployerSignup}
                className="group relative overflow-hidden bg-gradient-to-r from-[#08CB00] to-[#06A800] text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#06A800] to-[#048600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-1">
              <div className="rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/landingpage.jpg"
                  alt="Kimberley Employment Platform"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#08CB00]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00cbc4]/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="mb-4">
                <p className="text-4xl lg:text-5xl font-light text-[#08CB00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  300+
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#08CB00] to-transparent mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-400 font-medium tracking-wide">
                Active Job Seekers
              </p>
            </div>

            <div className="group border-x border-slate-600 md:border-x md:border-y-0 border-y md:border-y-0">
              <div className="mb-4">
                <p className="text-4xl lg:text-5xl font-light text-[#08CB00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  100+
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#08CB00] to-transparent mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-400 font-medium tracking-wide">
                Available Positions
              </p>
            </div>

            <div className="group">
              <div className="mb-4">
                <p className="text-4xl lg:text-5xl font-light text-[#08CB00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  1,200+
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#08CB00] to-transparent mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-400 font-medium tracking-wide">
                Successful Placements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
