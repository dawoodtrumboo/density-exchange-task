import React from 'react'
import { AiFillStar, AiFillMail } from 'react-icons/ai';
import PhoneFrame from "@/components/PhoneFrame";
import Image from 'next/image';

const IntroSection = () => {
  return (
    <section id="section1" className="relative overflow-hidden bg-[#EEEBFE] mx-[30px] pl-[40px] pr-[20px] h-[80vh] rounded-[30px] flex items-center justify-between">
    <div className="w-[50%] space-y-8">
      <div className="hidden1 text-slide-in">
        <p className="font-light">Ahead app</p>
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

    <div className="intro-box1 absolute left-0 top-0 w-full h-full">
      <div className="w-full h-full relative">
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
    <PhoneFrame />
  </section>
  )
}

export default IntroSection