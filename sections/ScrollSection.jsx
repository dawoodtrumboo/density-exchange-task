import React,{useEffect,useState,useRef} from 'react'
import Image from 'next/image';
// import '../app/globals.css'
const ScrollSection = () => {

  const [currentGlow, setCurrentGlow] = useState(0);
  const pathRef = useRef(null);
  const doodleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const points = document.querySelectorAll('.dot');
    const lines = document.querySelector('.line');
  
    const glowToggle = () => {
      points.forEach((point, index) => {
        point.classList.remove('glowing');
        if (index === currentGlow) {
          point.classList.add('glowing');
        }
      });
  
      if (currentGlow === 0) {
        lines.classList.remove('glowing');
      } else {
        lines.classList.add('glowing');
      }
    };
  
    glowToggle();  // Call glowToggle here
  
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setCurrentGlow(prev => Math.min(prev + 1, points.length - 1));
      } else {
        setCurrentGlow(prev => Math.max(prev - 1, 0));
      }
    };
  
    const container = document.querySelector('.scroll-box');
    if (container) {
      container.addEventListener('wheel', handleScroll);
  
      return () => {
        container.removeEventListener('wheel', handleScroll);
      };
    }
  }, [currentGlow]);


  useEffect(() => {
    console.log("useEffect")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('doodlePath');
        } else {
          entry.target.classList.remove('doodlePath');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.doodle');

    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };

  }, []);
  
  
  useEffect(() => {
    const path = pathRef.current;
    const doodle = doodleRef.current;
    const container = containerRef.current;
    
    let observer;

    function step(timestamp, start) {
      const elapsed = timestamp - start;
      const pathLength = path.getTotalLength();

      // Stop the animation after 4000ms
      if (elapsed > 1000) return;

      const offset = pathLength - ((elapsed / 1000) * pathLength);
      const position = path.getPointAtLength(offset);

      doodle.style.left = `${position.x}px`;
      doodle.style.top = `${position.y}px`;

      requestAnimationFrame(newTimestamp => step(newTimestamp, start));
    }

    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(timestamp => step(timestamp, timestamp));
        }
      });
    }

    observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    observer.observe(container);

    return () => observer.disconnect();

  }, []);


  return (
    <section >
    <div ref={containerRef} className="flex w-full relative">
        <div className="mx-[100px] hidden1 text-slide-in">
        <p className="text-2xl">Wrong with self-improvement & how we're fixing it.</p>
        <h1 className="text-6xl font-semibold">Self-improvement. Ugh.</h1>
        </div>
        <svg width="500" height="400" className="absolute -top-[50px right-[80px]">
      <path ref={pathRef} id="path" d="M44,10 C132,200 296,36 458,150" stroke="none" fill="none"/>
    </svg>
        <div  ref={doodleRef} id="doodlee" className="doodlePath2 doodle2   ">
      <Image
            src="/assets/doodle3.png"
            alt="Logo"
            width={80}
            height={10}
            priority
            />
      </div>
  </div>


      <div className="scroll-box h-[65vh] w-full flex mt-[50px] my-[100px] overflow-y-scroll">
        <div className="mx-[300px] pt-10">
          <div className="line  bg-[#6442EF] w-[3px] h-[800px] text-gray-400 relative text-xl">

            {/* point 1 */}
           <div className="dot absolute -top-[10px] -left-[13px] flex gap-5 ">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>

           {/* point 2 */}
           <div className="dot absolute top-[140px] -left-[13px] flex gap-5">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>

           {/* point 3 */}
           <div className="dot absolute top-[300px] -left-[13px] flex gap-5">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>

           {/* point 4 */}
           <div className="dot absolute top-[460px] -left-[13px] flex gap-5">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>

           {/* point 5 */}
           <div className="dot absolute top-[620px] -left-[13px] flex gap-5">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>

             {/* point 6 */}
             <div className="dot absolute top-[780px] -left-[13px] flex gap-5">
            <div className=" h-[30px] w-[30px] rounded-full 
              bg-[#6442EF] bg-opacity-20 flex items-center justify-center">
                <div className="h-[15px] w-[15px] rounded-full 
              bg-[#6442EF] flex items-center justify-center"></div>
              </div>
              <div className="w-[700px] space-y-2">
                <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
                </p>
              </div>
           </div>
          
          </div>
        </div>
      </div>
      </section>
  )
}

export default ScrollSection