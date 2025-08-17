import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className=" h-screen px-[10%] py-10 text-slate-300 cursor-default mt-10">
      <div className="text-center mb-14 px-48">
        <p className=" text-5xl text-slate-400 font-light tracking-widest leading-normal">
          YOUR PLATFORM FOR{" "}
          <span className=" text-[#08CB00]">EMPLOYMENT IN KIMBERLEY.</span>
        </p>
        <p className=" mb-10 text-lg text-slate-400 font-light tracking-widest leading-normal">
          The smart way to find and hire top talent.
        </p>
      </div>

      <div className="flex h-[50%] gap-20 justify-center items-center">
        <div className="w-[40%]">
          <div className="  flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-3 mb-4">
            <p className=" text-sm text-[#08CB00] tracking-wider">Step One</p>
            <p>Create Your Profile</p>
            <p className=" text-xs text-slate-400 tracking-wider leading-relaxed">
              Job seekers effortlessly build a professional, digital CV using
              our free, intuitive builder. Companies create an account and get
              instant access to a curated talent pool.
            </p>
          </div>
          <div className="  flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-3 mb-4">
            <p className=" text-sm text-[#08CB00] tracking-wider">Step Two</p>
            <p>Affordable talent solutions, exceptional hires.</p>
            <p className=" text-xs text-slate-400 tracking-wider leading-relaxed">
              Hire for less, grow for more.
            </p>
          </div>
          <div className="  flex flex-col tracking-wider space-y-3 border-l border-slate-600 px-6 py-3 mb-4">
            <p className=" text-sm text-[#08CB00] tracking-wider">Step Three</p>
            <p>Simplify your search. Find your perfect hire.</p>
            <p className=" text-xs text-slate-400 tracking-wider leading-relaxed">
              Where great talent finds its match.
            </p>
          </div>
          <div className="flex gap-10 ml-8 items-center mt-6">
            <button className="bg-[#00cbc4] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
              Create CV
            </button>
            <button className="bg-[#08CB00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
              Employer sign up
            </button>
          </div>
        </div>
        <div className="w-[40%] max-h-[100%] rounded-3xl overflow-hidden">
          <div className="flex justify-center items-center h-screen">
            <img
              src="/landingpage.jpg"
              alt="Kimberley Online Logo"
              className="max-w-full max-h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center  mt-14 font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">300+</p>
          <p className="mt-2 text-sm text-slate-500">Job seekers</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">100+</p>
          <p className="mt-2 text-sm text-slate-500">Jobs Available</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">1200+</p>
          <p className="mt-2 text-sm text-slate-500">Successful Hires</p>
        </div>
      </div>
    </div>
  );
}
