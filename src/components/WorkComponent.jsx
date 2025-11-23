import { FiArrowDownRight } from "react-icons/fi";
import { works } from "../../constant/data";
import { Link } from "react-router-dom";

const WorkComponent = () => {
  return (
    <section className=" items-center justify-between px-4 md:px-10 lg:px-14 xl:px-20 py-10">
      <h2 className="lg:text-9xl md:text-6xl text-4xl py-4">Work</h2>
      <div className=" grid gap-8 py-16">
        <div className="lg:flex grid gap-8">
          <div className="grid gap-8">
            {works.map((work) => {
              return (
                
                  <div className="lg:flex gap-12 border-t border-gray-200 py-10">
                    <div className="lg:w-2/3">
                      <img
                        src={work.img}
                        alt=""
                        className="w-full lg:h-[400px] pb-6"
                      />
                    </div>
                    <div className="flex flex-col justify-between mb-7">
                      <div className="flex flex-col">
                        <h3 className="lg:text-6x text-4xl  font-semibold pb-8">
                          {work.company}
                        </h3>
                        <p className="lg:w-[80%]">{work.desc}</p>
                      </div>
                      <div className="lg:flex md:grid-cols-2 gap-4">
                        {work.categorys.map((category) => (
                          <button className="border-gray-300 px-4 border rounded-full text-gray-500 uppercase">
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  <Link to={'/services'} className=" py-10">
                    <FiArrowDownRight className="text-4xl" />
                  </Link>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
