import HeroCard from "./HeroCard";
import Testimonial from "./TestimonialCard";


const Hero = () => {

  return (
    <>
    
      <header className="flex flex-col items-center bg-[#0C0414] text-white pb-4 md:pb-0">

        <div className="p-px rounded-full bg-linear-to-r from-indigo-900 to-[#5F5F5F] mt-32">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 px-4 rounded-full bg-[#0C0414]">
            <p className="text-sm text-slate-200">
              ⚡ AI-Powered Website Generator
            </p>
          </div>
        </div>

        <h1 className="text-4xl md:text-[66px]/[72px] text-center max-w-4xl mt-6 bg-linear-to-r from-[#231233] via-[#F5F5F5] to-[#231233] text-transparent bg-clip-text leading-tight px-4">
          Design, Build & Launch Websites with AI in Minutes
        </h1>
        <p className="text-sm md:text-base bg-linear-to-r from-[#231233] via-[#F5F5F5] to-[#231233] text-transparent bg-clip-text text-center max-w-lg mt-4 px-4">
          Create production-ready Designs instantly with
          AI-generated layouts, code and design systems.
        </p>

        <div className="flex gap-3 mt-7">
          <button onClick={() => '/contact-us'} className="bg-white hover:bg-white/80 border border-white/5 text-gray-900 text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
            Get in touch
          </button>
          <button onClick={() => '/our-works'} className="bg-white/10 hover:bg-white/5 border border-white/5 text-gray-50 text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
            See our works
          </button>
        </div>

        <div className="relative mt-12 w-full max-w-9xl px-4">
          <HeroCard />
        </div>
      </header>
    </>
  );
};

export default Hero
