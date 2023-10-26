import React from 'react'
import Image from "next/image";

const IntroSection2 = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEEBFE] mx-[30px] my-[100px] pl-[40px] h-[80vh] rounded-[30px] flex items-center">
    <div className="intro-box1 absolute left-0 top-0  w-full h-full">
      <div className="w-full h-full relative ">
      <div className="rotating-object absolute top-20 right-20 rotate-[150deg]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
              <path d="M0,25 A50,25 0 1,0 100,25 Z" fill="#76C598" />
            </svg>
          </div>
          <div className="rotating-object2 absolute bottom-[120px] left-[300px] rotate-[150deg]">
            <svg width="100" height="100">
              <path d="M0,50 a1,1 0 0,0 40,0" fill="#76C598" />
            </svg>
          </div>

          <div className="moving-object absolute bottom-[140px] left-[330px] rotate-[150deg]">
            <div className="h-[30px] w-[30px] bg-[#EB695B] bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="h-[10px] w-[10px] bg-[#EB695B] rounded-full"></div>
            </div>
          </div>

          <div className="moving-object absolute bottom-[230px] left-[380px] rotate-[150deg]">
            <div className="h-[20px] w-[20px] bg-[#EB695B] bg-opacity-20 rounded-full flex items-center justify-center">
            </div>
          </div>

          <div className="scale-object absolute bottom-[180px] -left-[10px] rotate-[150deg]">
            <div className="h-[30px] w-[30px] bg-[#EB695B] bg-opacity-20 rounded-full flex items-center justify-center">
            </div>
          </div>

          <div className="scale-object absolute -bottom-[15px] left-[280px] rotate-[150deg]">
            <div className="h-[30px] w-[30px] bg-[#EB695B] rounded-full flex items-center justify-center">
            </div>
          </div>
          <div className="scale-object absolute -top-[15px] right-[280px] rotate-[150deg]">
            <div className="h-[30px] w-[30px] bg-[#EB695B] bg-opacity-30 rounded-full flex items-center justify-center">
            </div>
          </div>

      </div>

    </div>
<div className="flex flex-col items-start w-[50%] space-y-8">
  <p className=" font-light">Built out of frustration</p>
  <h1 className="text-5xl font-semibold tracking-normal">
    Meet the ahead app
  </h1>
  <div className="flex justify-center w-[60%]">
    <div className='relative bg-[#f5f5f5] h-[200px] w-[200px] flex items-center justify-center rounded-full'>
      <div className='bg-white w-[80%] h-[80%] rounded-full flex justify-center items-center'>
        <div className='animate-s rotate-[120deg]'>
        <Image src="/assets/doodle3.png" alt="" width={104} height={79} />
        </div>
        {/* Circle 1 */}
        <div className="absolute -top-[20px]  flex flex-col items-center gap-2">
        <svg width="50" height="50" viewBox="0 0 200 200" fill="rgba(233, 195, 127, 0.7)" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_103_21)">
              <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z" fill="rgba(233, 195, 127, 0.7)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_103_21" x1="100.081" y1="0" x2="100.081" y2="200" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B8DBFC" />
                <stop offset="1" stop-color="#F8FBFE" />
              </linearGradient>
              <clipPath id="clip0_103_21">
                <rect width="200" height="200" fill="rgba(233, 195, 127, 0.7)" />
              </clipPath>
            </defs>
            <circle cx="100" cy="100" r="60" fill="#D68E4C" />
            <text x="100" y="110" font-size="36" text-anchor="middle" fill="#fff">1</text>
        </svg>
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