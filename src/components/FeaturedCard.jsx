import { features } from "../../constant/data";

const FeaturedCard = () => {
  

  return (
    <>

      <section className="bg-white text-black py-16 px-4 mt-5">
        <div className="flex items-center flex-col justify-center text-center">
          <button className="bg-neutral-800 text-sm text-white/80 px-6 py-2.5 rounded-full">
            Our core features
          </button>
          <h2 className="text-black font-medium text-4xl md:text-[40px] mt-6">
            Every product needs consistency.
          </h2>
          <p className="text-base text-black/60 max-w-lg mt-2">
            Our Tailwind CSS components help you ship beautiful interfaces
            without reinventing the wheel.
          </p>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl hover:-translate-y-3 transition duration-300 p-6 flex flex-col"
              >
                {feature.hasTrending && (
                  <div className="bg-[#262626] px-2 py-1 rounded-full flex items-center gap-1.5 w-fit ml-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#00A63E"
                      stroke="#00A63E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up-icon lucide-trending-up"
                    >
                      <path d="M16 7h6v6" />
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                    </svg>
                    <p className="text-xs text-white/80">45%</p>
                  </div>
                )}
                <div
                  className={`flex-1 flex items-center justify-center ${feature.imageContainerClass}`}
                >
                  <img
                    className={`w-full object-contain ${feature.imageClass}`}
                    src={feature.image}
                    alt={feature.alt}
                  />
                </div>
                <h3 className="text-base font-medium text-white mt-8 text-left">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 mt-2 text-left max-w-2xs mb-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default FeaturedCard