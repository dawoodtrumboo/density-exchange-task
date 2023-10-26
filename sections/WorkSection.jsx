import React, {useEffect,useRef} from 'react'
import { Poppins } from 'next/font/google'
import Card from "@/components/Card";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ['latin'],  
    weight: ['400','500'],
  })

const WorkSection = () => {

    const workSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("work-section");
            } else {
              entry.target.classList.remove("work-section");
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // Adjust if needed
          }
        );
    
        if (workSectionRef.current) {
          observer.observe(workSectionRef.current);
        }
    
        return () => {
          if (workSectionRef.current) {
            observer.unobserve(workSectionRef.current);
          }
        };
      }, []);


  return (
    <section ref={workSectionRef} className="work-section bg-[#EEEBFE] mx-[30px] my-[100px] pl-[40px] pr-[40px] py-[60px] h-[80vh] rounded-[30px] flex justify-between">
        
    <div className="space-y-[20px] text-lg tracking-wide">
      <div className="work-heading1 animate-in">
      <h1 className="text-6xl font-semibold">Work with us</h1>
      </div>
      <div className="bg-white w-[650px] rounded-[20px] overflow-hidden">
        <div className="p-[20px] space-y-2">
          <div className="work-image">
            <div className="pendulum-animation">
            <Image
            src="/assets/doodle3.png"
            alt="Logo"
            width={80}
            height={10}
            priority
            />
            </div>
          </div>
          <div className="px-[25px] py-[15px] space-y-2">
          <h1 className="font-semibold">About</h1>
          <p className="text-slate-600">At ahead our goal is to make self-
            improvement fun and lasting. We know there's
            a way how to make it work. And that's what
            aHead is all about!
          </p>
          </div>
        </div>
        <div className="bg-[#FDF6F1] rounded-[20px] px-[50px] py-[35px] space-y-2">
          <h1 className="font-semibold">Product</h1>
          <p className="text-slate-600">Sure, you could spend ages reading books or
        sitting in seminars on how to become a better
        spouse, parent, or manager - like we did...</p>
        </div>
      </div>
    </div>
    <div>
    
    <div className={`work-heading2 animate-in2 ${poppins.className}`}  >
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
  )
}

export default WorkSection