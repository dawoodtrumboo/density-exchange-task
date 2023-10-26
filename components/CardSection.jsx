import Card from "@/components/Card";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef,useEffect } from "react";

export default function CardSection(){

  const racesRef = useRef(null); // Add a ref to the `.races` element
  const racesWrapperRef = useRef(null); // Add a ref to the `.racesWrapper` element
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const races = racesRef.current;
    let racesWidth = races.offsetWidth;
    let amountToScroll = racesWidth - window.innerWidth +300;

    const tween = gsap.to(races, {
      x: -amountToScroll,
      duration: 3,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: racesWrapperRef.current,
      start: "top 1000",
      end: "+=" + amountToScroll,
      pin: "races",
      animation: tween,
      scrub: 1,
      // markers: true
    });

  }, []);
  
    return(
      <div   className="scroll-section-outer pageWrapper ">
        <section className="section overflow-hidden">
        <div className="container w-[90%]">
        <div ref={racesWrapperRef} className=" items racerWraper flex justify-start">
          <div ref={racesRef}  className="scroll-section-inner h-[300px] flex gap-10 w-[150%]  items-center races item">
            <div className="scroll-section">
              <Card
                emoji="😠"
                heading="You argue with a colleague"
                para=" You get angry and defensive, instead of
                staying open and working towards
                common ground."
                backgroundColor="#EEEBFE"
                textColor="#000000"
                height='190px'
              
              />
          </div>
          <div className="scroll-section">
            <Card
            emoji="😳"
            heading="You get a promotion at work"
            para="You question yourself and wonder when
            they'll realize you're an unqualified
            imposter, instead of trusting yourself &
            your abilities."
            backgroundColor="#FFEFD5"
            textColor="#000000"
            height='180px'
            
          />
          </div>

          <div className="scroll-section">
            <Card
            emoji="🤨"
            heading="You attend a class reunion"
            para="You compare yourself with your peers' 
            achievements, instead of making your self-judgement
            more independent of others."
            backgroundColor="#6341EF"
            textColor="#ffffff"
            transform='rotate(-5deg)'
            height='190px'
            
          />
          </div>

          <div className="scroll-section">
          <Card
            emoji="😒"
            heading="You are at a lively dinner party"
            para="You play on your phone, instead of confidently
            approaching strangers and striking up a chat."
            backgroundColor="#f4dab1"
            textColor="#000000"
            height='190px'
            
          />
          </div>
          <div className="scroll-section">
          <Card
            emoji="😬"
            heading="You hit dead end in a negotiation"
            para="You ger nervous frazzled and frustrated
            instead of staying optimistic and solution-oriented."
            backgroundColor="#eeeded"
            textColor="#000000"
            height='190px'
            
          />
          </div>
          </div>
        </div>
        </div>
        </section>
        </div>
    )
}