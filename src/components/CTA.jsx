import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='grid gap-8 items-center justify-center m-auto w-3/4 font-sans p-4'>
      <h3 className='font-bold lg:text-[10rem] md:text-6xl text-4xl text-center' >Want to start a project?</h3>
      <Link to={'/contact'} className='bg-orange-600 w-fit flex items-center text-white p-4 px-6 rounded-full gap-8 font-semibold text-[20px] text-center mx-auto cursor-pointer'>
        Let's Talk
        <FaArrowRight className='bg-white text-orange-600 p-2 rounded-full text-4xl' />
      </Link>
    </section>
  )
}

export default CTA