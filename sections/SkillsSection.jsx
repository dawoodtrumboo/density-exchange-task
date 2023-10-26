import React, {useEffect,useRef} from 'react'

const SkillsSection = () => {

    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("skill-section");
            } else {
              entry.target.classList.remove("skill-section");
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // Adjust if needed
          }
        );
    
        if (skillRef.current) {
          observer.observe(skillRef.current);
        }
    
        return () => {
          if (skillRef.current) {
            observer.unobserve(skillRef.current);
          }
        };
      }, []);


  return (
    <section ref={skillRef} className="skill-section bg-[#EDF7FE] mx-[30px] my-[100px] py-[80px] pl-[40px] h-[80vh] rounded-[30px] flex items-center flex-col">

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
        <h1 className=" w-[300px]">
        Answer questions on your social skills
        </h1>
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
        <h1 className=" w-[300px]">
        Let others anonymously answer the same questions about you
        </h1>
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
        <h1 className=" w-[300px]">
        Find out where you and others see things
the same way - and where not!
        </h1>
        </div>
      </div>

    </div>

    <div className="bg-white h-[230px] w-[60%] mt-[150px] rounded-[20px] shadow-md
     shadow-slate-200 flex items-center justify-center">

        <div className="relative border-b-[2px] border-gray-200 w-[90%] text-white">
          <div>
          {/* Dot 1 */}
          <div className="dotBox dotBox-1 absolute -top-[64px] -left-12 flex flex-col items-end gap-3">
            <div className="bg-[#6541EE] rounded-md px-4 py-2">
              You
            </div>
            <div className="w-[30px] h-[30px] bg-[#6541EE] rounded-full ">

            </div>
          </div>
          
           {/* Dot 2 */}
           <div className="dotBox dotBox-2 absolute -top-[14px] left-[25%] flex flex-col items-start gap-3">
           <div className="w-[30px] h-[30px] bg-[#40C3FC] rounded-full "></div>
            <div className="bg-[#40C3FC] rounded-md px-4 py-2">
              Anonymonos 1
            </div>
            
          </div>

           {/* Dot 3 */}
           <div className="dotBox dotBox-3 absolute -top-[64px] left-[62%] flex flex-col items-start gap-3">
            <div className="bg-[#FDB338] rounded-md px-4 py-2">
              Anonymonos 2
            </div>
            <div className="w-[30px] h-[30px] bg-[#FDB338] rounded-full ">

            </div>
          </div>

          {/* Dot 4 */}
          <div className="dotBox dotBox-4 absolute -top-[14px] left-[96%] flex flex-col items-start gap-3">
           <div className="w-[30px] h-[30px] bg-[#58C897] rounded-full "></div>
            <div className="bg-[#58C897] rounded-md px-4 py-2 w-[138px]">
              Anonymonos 3
            </div>
            
          </div>
          </div>

        </div>
      
    </div>
</section>
  )
}

export default SkillsSection