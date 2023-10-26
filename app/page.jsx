'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AiFillStar, AiFillMail } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

import CustomButton from "@/components/CustomButton";
import CardSection from "@/components/CardSection";
import ScrollSection from "@/sections/ScrollSection";
import Vacancies from "@/sections/Vacancies";
import Signature from "@/components/Signature";
import IntroSection2 from "@/sections/IntroSection2";
import SkillsSection from "@/sections/SkillsSection";
import WorkSection from "@/sections/WorkSection";
import IntroSection from "@/sections/IntroSection";


export default function Home() {
  const testRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("test-section");
        } else {
          entry.target.classList.remove("test-section");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (testRef.current) {
      observer.observe(testRef.current);
    }

    return () => {
      if (testRef.current) {
        observer.unobserve(testRef.current);
      }
    };
  }, []);

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

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);






  return (
    <main className="pt-[100px]">


      {/* INTRO SECTION 1 */}

    <IntroSection/>

      {/* FACTS SECTION 1 */}

      <section id="section2" className="flex mx-[100px] my-[100px] justify-between">
        <p className="w-[30%] flex text-2xl font-semibold">EQ beats IQ</p>
        <p className="w-[30%] font-light text-xl">
          People with high emotional intelligence <span>&#40;</span>EQ<span>&#41;</span> live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
        <p className="w-[30%] font-light text-xl">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they
          earn $29k a year.
        </p>
      </section>

      {/* EMOTION CARD SECTION */}

      <div className="flex w-full relative">
        <div className="hidden1 text-slide-in">
          <h1 className="mx-[30px] text-6xl font-semibold">Does this sound familiar...</h1>
        </div>
        <div className="doodlePath doodle">
          <Image
            src="/assets/doodle3.png"
            alt="Logo"
            width={80}
            height={10}
            priority
          />
        </div>
      </div>
      <CardSection />


      {/* INTRO SECTION 2 */}

      <IntroSection2 />


      {/* SCROLL SECTION */}
      <ScrollSection />

      {/* FACTS SECTION 2 */}
      <section className="flex mx-[100px] my-[100px] justify-between">
        <p className="w-[30%] flex text-2xl font-semibold">EQ beats IQ</p>
        <p className="w-[30%] font-light text-xl">
          People with high emotional intelligence <span>&#40;</span>EQ<span>&#41;</span> live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
        <p className="w-[30%] font-light text-xl">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they
          earn $29k a year.
        </p>
      </section>

      {/* RATE SKILL SECTION */}
      <SkillsSection />

      {/* TEST SECTION */}
      <section ref={testRef} className="test-section h-[85vh] mx-[30px] flex flex-col justify-center items-center text-center">
        <div className="w-[55%] space-y-3">
          <p className="text-xl text-slate-800">We take privacy seriously</p>
          <h1 className="text-4xl font-semibold">Before you get started</h1>
          <p className="text-2xl text-slate-500">"We won't share your answers with anyone and won't ever tell
          you which friends said what about you)"</p>
        </div>
        <div className="flex items-center justify-center pl-20">
          <p className="text-xl">with love,</p>
          <Signature />
        </div>
        <div className="space-y-3">
          <div className="test-button">
            <CustomButton
              name="Start a test"
            />
          </div>
          <p className="text-slate-500">Take only 5 minutes</p>
        </div>
      </section>



      {/* WORK WITH US SECTION */}
      <WorkSection/>



      {/* VACANCIES SECTION */}
      <Vacancies />


      <hr className="my-[80px] border-[1px]" />

      {/* FOOTER SECTION */}
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
              <FaLocationDot />
            </div>
            <p>Auguststraße 26, 10117 Berlin</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#9EF1DB] p-[5px] rounded-full">
              <AiFillMail />
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
  );
}
