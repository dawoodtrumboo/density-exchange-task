"use client";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import { Poppins } from 'next/font/google'
import {AiFillMail} from 'react-icons/ai';
import Image from "next/image";
import { AiFillStar} from 'react-icons/ai';


import {FaLocationDot} from 'react-icons/fa6'

import PhoneFrame from "@/components/PhoneFrame";
import CardSection from "@/components/CardSection";
import IntroSection2 from "@/sections/IntroSection2";
import ScrollSection from "@/sections/ScrollSection";
import RateSkill from "@/sections/RateSkill";
import Vacancies from "@/sections/Vacancies";
import { useEffect,useState } from "react";


const poppins = Poppins({
  subsets: ['latin'],  
  weight: ['400','500'],
})


export default function Home() {


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-slide-in');
        } else {
          entry.target.classList.remove('text-slide-in');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden1');

    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };

  }, []);

  
  
  return (
    
  
    <main className="pt-[100px]">

    {/*-------------------- INTRO SECTION 1 ------------------------------- */}


    <section id="section1" className=" relative overflow-hidden bg-[#EEEBFE] mx-[30px] pl-[40px] pr-[20px] h-[80vh] rounded-[30px] flex items-center justify-between">
    <div className="w-[50%] space-y-8">
    <div className="hidden1 text-slide-in">
    <p className=" font-light">Ahead app</p>
    <h1 className="text-6xl font-semibold tracking-wide w-[500px]">
      Master your life by mastering emotions
    </h1>
    </div>
    <div>
      <div>
        <div className="flex gap-[10px] py-10">
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

    <div className="intro-box1 absolute left-0 top-0  w-full h-full">
      <div className="w-full h-full relative ">
          <div className="rotating-object absolute -top-4 left-20 rotate-[150deg]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
              <path d="M0,25 A50,25 0 1,0 100,25 Z" fill="#76C598" />
            </svg>
          </div>

          <div className="rotating-object2 absolute top-[120px] left-[300px] rotate-[150deg]">
            <svg width="100" height="100">
              <path d="M0,50 a1,1 0 0,0 40,0" fill="#76C598" />
            </svg>
          </div>

          <div className="moving-object absolute top-[180px] left-[330px] rotate-[150deg]">
            <div className="h-[30px] w-[30px] bg-[#EB695B] bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="h-[10px] w-[10px] bg-[#EB695B] rounded-full"></div>
            </div>
          </div>

          <div className="moving-object absolute top-[120px] left-[480px] rotate-[150deg]">
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
  <PhoneFrame/>
    
  </section>


    {/*-------------------- FACTS SECTION 1 ------------------------------- */}

    <section id="section2" className="flex mx-[100px] my-[100px] justify-between">
        
        <p className="w-[30%] flex text-2xl font-semibold">EQ beats IQ</p>
     
      
        <p className="w-[30%] font-light text-xl">
          People with high emotional
          intelligence <span>&#40;</span>EQ<span>&#41;</span> live more fulfilled
          lives. They tend to be happier and
          have healthier relationships.
        </p>
      
      <p className="w-[30%] font-light text-xl">
          They are more successful in their
          pursuits and make for inspiring
          leaders. According to science, they
          earn $29k a year.
      </p>
    </section>

    {/*-------------------- EMOTION CARD SECTION ------------------------------- */}
    {/* <section  className="space-y-16 py-[50px] border-2 border-red-500"> */}
        <div className="hidden1 text-slide-in">
        <h1 className=" mx-[30px] text-6xl font-semibold">Does this sound familiar...</h1>
        </div>
        <CardSection/>
      {/* </section> */}

    {/*-------------------- INTRO SECTION 2 ------------------------------- */}
    <IntroSection2 />


    {/*-------------------- SCROLL SECTION ------------------------------- */}
   <ScrollSection/>
   
      

    {/*-------------------- FACTS SECTION 2 ------------------------------- */}
    <section className="flex mx-[100px] my-[100px] justify-between">
        
        <p className="w-[30%] flex text-2xl font-semibold">EQ beats IQ</p>
     
      
        <p className="w-[30%] font-light text-xl">
          People with high emotional
          intelligence <span>&#40;</span>EQ<span>&#41;</span> live more fulfilled
          lives. They tend to be happier and
          have healthier relationships.
        </p>
      
      <p className="w-[30%] font-light text-xl">
          They are more successful in their
          pursuits and make for inspiring
          leaders. According to science, they
          earn $29k a year.
      </p>
      </section>


    {/*-------------------- RATE SKILL SECTION ------------------------------- */}
    <section className="bg-[#EDF7FE] mx-[30px] my-[100px] py-[80px] pl-[40px] h-[80vh] rounded-[30px] flex items-center flex-col">

    <div className="text-center space-y-2">
      <p className="text-xl">Let your friends,family, and co-workers (anonymously) rate your social skills.</p>
      <h1 className="text-5xl font-semibold">Ever wondered what others think of you?</h1>
    </div>
    <div className="w-[70%] text-sm font-light text-center">
      <div class=" relative dashed-border">

        {/* Circle 1 */}
        <div className="absolute top-[45px] -left-[140px]  flex flex-col items-center gap-2">
        <svg width="70" height="70" viewBox="0 0 200 200" fill="rgba(233, 195, 127, 0.7)" xmlns="http://www.w3.org/2000/svg">
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
        <div className=" w-[300px]">
        Answer questions on your social skills
        </div>
        </div>

         {/* Circle 2 */}
         <div className="absolute top-[45px] left-[34%]  flex flex-col items-center gap-2">
        <svg width="70" height="70" viewBox="0 0 200 200" fill="rgba(233, 195, 127, 0.7)" xmlns="http://www.w3.org/2000/svg">
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
            <text x="100" y="110" font-size="36" text-anchor="middle" fill="#fff">2</text>
        </svg>
        <div className=" w-[300px]">
        Let others anonymously answer the same questions about you
        </div>
        </div>

        {/* Circle 3 */}
        <div className="absolute top-[45px] left-[80%]  flex flex-col items-center gap-2">
        <svg width="70" height="70" viewBox="0 0 200 200" fill="rgba(233, 195, 127, 0.7)" xmlns="http://www.w3.org/2000/svg">
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
            <text x="100" y="110" font-size="36" text-anchor="middle" fill="#fff">3</text>
        </svg>
        <div className=" w-[300px]">
        Find out where you and others see things
the same way - and where not!
        </div>
        </div>
      </div>

    </div>

    <div className="bg-white h-[230px] w-[60%] mt-[150px] rounded-[20px] shadow-md
     shadow-slate-200 flex items-center justify-center">

        <div className="relative border-b-[2px] border-gray-200 w-[90%] text-white">

          {/* Dot 1 */}
          <div className="absolute -top-[64px] -left-12 flex flex-col items-end gap-3">
            <div className="bg-[#6541EE] rounded-md px-4 py-2">
              You
            </div>
            <div className="w-[30px] h-[30px] bg-[#6541EE] rounded-full ">

            </div>
          </div>

           {/* Dot 2 */}
           <div className="absolute -top-[14px] left-[25%] flex flex-col items-start gap-3">
           <div className="w-[30px] h-[30px] bg-[#40C3FC] rounded-full "></div>
            <div className="bg-[#40C3FC] rounded-md px-4 py-2">
              Anonymonos 1
            </div>
            
          </div>

           {/* Dot 3 */}
           <div className="absolute -top-[64px] left-[62%] flex flex-col items-start gap-3">
            <div className="bg-[#FDB338] rounded-md px-4 py-2">
              Anonymonos 2
            </div>
            <div className="w-[30px] h-[30px] bg-[#FDB338] rounded-full ">

            </div>
          </div>

          {/* Dot 4 */}
          <div className="absolute -top-[14px] left-[96%] flex flex-col items-start gap-3">
           <div className="w-[30px] h-[30px] bg-[#58C897] rounded-full "></div>
            <div className="bg-[#58C897] rounded-md px-4 py-2 w-[138px]">
              Anonymonos 3
            </div>
            
          </div>

        </div>
      
    </div>
</section>
    {/*-------------------- TEST SECTION ------------------------------- */}

      <section className="h-[85vh] mx-[30px] flex flex-col justify-center items-center text-center gap-10">
        <div className="w-[55%] space-y-3">
          <p className="text-xl text-slate-800">We take privacy seriously</p>
          <h1 className="text-4xl font-semibold">Before you get started</h1>
          <p className="text-2xl text-slate-500">"We won't share your answers with anyone and won't ever tell
          you which friends said what about you)"</p>
        </div>
        <p className="text-xl">with love, Team ahead</p>
        <div className="space-y-3">
        <CustomButton
          name="Start a test"
          />
        <p className="text-slate-500">Take only 5 minutes</p>
        </div>

      </section>

    {/*-------------------- WORK WITH US SECTION ------------------------------- */}

    <section className="bg-[#EEEBFE] mx-[30px] my-[100px] pl-[40px] pr-[40px] py-[60px] h-[80vh] rounded-[30px] flex justify-between">
        
        <div className="space-y-[50px] text-2xl tracking-wide">
          <h1 className="text-6xl font-semibold">Work with us</h1>
          <div className="bg-white w-[650px] rounded-[20px] overflow-hidden">
            <div className="p-[50px] space-y-2">
              <div>
                {/* image */}
              </div>
              <h1 className="font-semibold">About</h1>
              <p className="text-slate-600">At ahead our goal is to make self-
                improvement fun and lasting. We know there's
                a way how to make it work. And that's what
                aHead is all about!
              </p>
            </div>
            <div className="bg-[#FDF6F1] roundedt-[20px] p-[50px] space-y-2">
              <h1 className="font-semibold">Product</h1>
              <p className="text-slate-600">Sure, you could spend ages reading books or
            sitting in seminars on how to become a better
            spouse, parent, or manager - like we did...</p>
            </div>
          </div>
        </div>
        <div>
        
        <div className={poppins.className}  >
          <h1 className="text-end text-6xl mb-[20px] mr-[50px] font-semibold text-[#643FF4] font-">ahead</h1>
          </div>
          <div className="h-[90%] flex flex-col gap-8 pr-[50px] overflow-y-scroll" id="custom-scrollbar">
           
            <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
             <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
             <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
             <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
             <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
             <Card
            heading="Power through, even when the going gets tough"
            para ="We help you and work around whatever stands in the way, be it bad habits, fear etc."
            backgroundColor="#ffffff"
            />
          </div>

        </div>
      </section>
      

    {/*-------------------- VACANCIES SECTION ------------------------------- */}


     <Vacancies/>

      <hr className="my-[80px] border-[1px]" />


    {/*-------------------- FOOTER SECTION ------------------------------- */}



      <footer className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
            <Image
            src="/assets/logo.jpg"
            alt="Logo"
            width={50}
            height={20}
            priority
            className="rounded-[10px]"
            />
             <h1 className="text-xl font-semibold text-[#643FF4]">ahead</h1>

          </div>
        <div className="flex gap-10 font-light">
        <div className="flex gap-2 items-center">
          <div className="bg-[#9EF1DB] p-[5px] rounded-full">
            <FaLocationDot/>
          </div>
          <p>Auguststraße 26, 10117 Berlin</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#9EF1DB] p-[5px] rounded-full">
            <AiFillMail/>
          </div>
          <p>hi@ahead-app.com</p>
        </div>
        </div>
        <Image
              src="/assets/apple.svg"
              alt="Logo"
              width={120}
              height={10}
              priority
              />
        <div className="text-sm text-slate-500">
        © 2022 Ahead app. All right reserved
        </div>

      </footer>


    </main>
  )
}
