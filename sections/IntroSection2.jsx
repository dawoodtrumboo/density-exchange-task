import React from 'react'
import Image from "next/image";
import { AiFillStar} from 'react-icons/ai';

const IntroSection2 = () => {
  return (
    <section className="bg-[#EEEBFE] mx-[30px] my-[100px] pl-[40px] h-[80vh] rounded-[30px] flex items-center">

    <div className="w-[50%] space-y-8">
      <p className=" font-light">Built out of frustration</p>
      <h1 className="text-6xl font-semibold tracking-normal">
        Meet the ahead app
      </h1>
      <div>
        <div>
          <div className="flex gap-5 py-10">
              <Image
            src="/assets/apple.svg"
            alt="Logo"
            width={120}
            height={10}
            priority
            />
            <div className="flex flex-col items-center space-y-1">
            <div className="text-yellow-400 text-xl flex gap-2">
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
             <AiFillStar />
            </div>
           
            <p className="text-sm font-light">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="text-xl font-light w-[450px] text-gray-700">
        A personalized pocket coach that provides bite-
        sized, science-driven tools to boost emotional
        intelligence.<br/>
        <br/>
        Think of it as a pocket cheerleader towards a
        better, more fulfilling.
      </div>

    </section>
  )
}

export default IntroSection2