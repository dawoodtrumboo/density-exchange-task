import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import Image from "next/image";
import { AiFillStar,
        AiFillMail,
        AiFillFire,
        AiOutlineClockCircle,
        AiFillGift,
        AiOutlinePlus,
        AiFillSecurityScan
      } from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6'
import { Poppins } from 'next/font/google'
import {MdNetworkCell,
        MdNetworkWifi,
        MdKeyboardArrowRight
      } from 'react-icons/md'
import {IoBatteryFullSharp} from 'react-icons/io5'


const poppins = Poppins({
  subsets: ['latin'],  
  weight: ['400','500'],
})

export default function Home() {
  let iconStyles = { color: "red" };
  
  return (
    
  
    <main className="pt-[100px]">

    {/*-------------------- INTRO SECTION 1 ------------------------------- */}
    <section className="bg-[#EEEBFE] mx-[30px] pl-[40px] h-[80vh] rounded-[30px] flex items-center justify-between">
        <div className="w-[50%] space-y-8">
        <p className=" font-light">Ahead app</p>
        <h1 className="text-7xl font-semibold tracking-wide">
          Master your life by mastering emotions
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



      <div>
        {/* Mobile Frame Starts Here */}
        <div className=" relative w-[50%] space-y-8">
          <div className="h-[370px] w-[190px] overflow-auto flex flex-col justify-between text-[8px] rounded-[20px] border-4 border-slate-700 bg-white p-[5px]">
            <div className=" space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold">15:46</p>
              <div className="flex gap-1">
                <MdNetworkCell/>
                <MdNetworkWifi/>
                <IoBatteryFullSharp/>
              </div>
            </div>


            <div className="flex">
              <div className="bg-[#7C61BA] bg-opacity-20 p-1 rounded-[5px] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 200 200" fill="#7C61BA" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_103_17)"> <path d="M97.8118 1.84638C98.2359 -0.615472 101.764 -0.615455 102.188 1.8464L106.863 28.9805C107.236 31.1438 110.179 31.5163 111.077 29.5138L122.339 4.39701C123.361 2.11817 126.778 2.99725 126.578 5.48745L124.371 32.9338C124.195 35.1221 126.953 36.2162 128.32 34.5003L145.463 12.9789C147.018 11.0263 150.11 12.7293 149.298 15.0913L140.348 41.1255C139.634 43.2011 142.034 44.9481 143.784 43.6267L165.73 27.053C167.721 25.5493 170.293 27.9691 168.92 30.0546L153.789 53.0407C152.583 54.8733 154.474 57.1634 156.497 56.3195L181.867 45.7349C184.169 44.7746 186.06 47.7592 184.212 49.4371L163.851 67.9308C162.228 69.4053 163.491 72.0946 165.66 71.7812L192.86 67.8507C195.328 67.4941 196.419 70.8561 194.213 72.021L169.901 84.8603C167.963 85.8839 168.519 88.8034 170.697 89.0403L198.019 92.0109C200.498 92.2805 200.719 95.8084 198.294 96.3871L171.559 102.765C169.427 103.274 169.241 106.24 171.292 107.012L197.018 116.697C199.352 117.576 198.691 121.048 196.198 121.005L168.72 120.521C166.529 120.482 165.613 123.309 167.408 124.568L189.922 140.359C191.964 141.792 190.462 144.99 188.058 144.326L161.564 137.011C159.451 136.428 157.862 138.937 159.288 140.604L177.175 161.509C178.798 163.406 176.549 166.129 174.385 164.887L150.539 151.2C148.637 150.109 146.475 152.144 147.443 154.113L159.579 178.818C160.68 181.06 157.826 183.137 156.039 181.396L136.338 162.197C134.768 160.666 132.168 162.098 132.617 164.247L138.24 191.199C138.75 193.645 135.469 194.946 134.171 192.814L119.855 169.309C118.713 167.435 115.84 168.174 115.741 170.367L114.497 197.875C114.385 200.37 110.884 200.813 110.156 198.424L102.124 172.091C101.483 169.992 98.5168 169.992 97.8764 172.091L89.8444 198.424C89.1156 200.813 85.6154 200.37 85.5025 197.875L84.259 170.367C84.1599 168.174 81.2866 167.435 80.1453 169.309L65.8294 192.814C64.5305 194.946 61.2502 193.645 61.7604 191.199L67.3835 164.247C67.8318 162.098 65.2323 160.666 63.6617 162.197L43.9615 181.396C42.1741 183.137 39.3198 181.06 40.421 178.818L52.5574 154.113C53.525 152.144 51.3625 150.109 49.4613 151.2L25.6147 164.887C23.4511 166.129 21.2022 163.406 22.8251 161.509L40.7123 140.604C42.1384 138.937 40.5488 136.428 38.4365 137.011L11.9418 144.326C9.53794 144.99 8.03576 141.792 10.0784 140.359L32.5924 124.568C34.3874 123.309 33.4707 120.482 31.28 120.521L3.80194 121.005C1.30888 121.048 0.647761 117.576 2.98188 116.697L28.708 107.012C30.7591 106.24 30.5728 103.274 28.4413 102.765L1.7065 96.3871C-0.719138 95.8084 -0.497588 92.2805 1.98131 92.0109L29.3032 89.0403C31.4815 88.8034 32.0373 85.8839 30.099 84.8603L5.78724 72.021C3.58145 70.856 4.67171 67.4941 7.13963 67.8507L34.3405 71.7812C36.5091 72.0946 37.7722 69.4053 36.1488 67.9308L15.7877 49.4371C13.9404 47.7592 15.8308 44.7746 18.1327 45.7349L43.5034 56.3195C45.5262 57.1634 47.417 54.8733 46.2107 53.0407L31.0796 30.0546C29.7067 27.9691 32.2786 25.5493 34.2698 27.053L56.2162 43.6267C57.966 44.9481 60.3658 43.2011 59.6523 41.1255L50.7019 15.0913C49.8899 12.7293 52.9816 11.0263 54.537 12.9789L71.6801 34.5003C73.0469 36.2162 75.805 35.122 75.6291 32.9338L73.4219 5.48743C73.2216 2.99724 76.6389 2.11816 77.6607 4.39699L88.9235 29.5138C89.8214 31.5163 92.7645 31.1438 93.1372 28.9805L97.8118 1.84638Z" fill="#7C61BA"/> </g> <defs> <linearGradient id="paint0_linear_103_17" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> <clipPath id="clip0_103_17"> <rect width="200" height="200" fill="#7C61BA"/> </clipPath> </defs> </svg>
              </div>
              <div className="mx-2">
                <p className="font-semibold">Taming Temper</p>
                <div className="flex items-center gap-1">
                  <div className="flex w-[70%] h-[3px] bg-[#7C61BA] bg-opacity-20 rounded-full overflow-hidden">
                    <div
                      className="flex flex-col justify-center overflow-hidden bg-[#7C61BA]"
                      role="progressbar"
                      style={{ width: '30%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="text-[5px] text-[#7C61BA]">20%</p>
                </div>
              
              </div>

              <div className="flex gap-1 items-center ml-10">
                  <AiFillFire className="text-red" style={iconStyles}/>
                  <span>0</span>
                  <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-[4px]">
                      <Image
                        src="/assets/logo.jpg"
                        alt="Logo"
                        width={60}
                        height={60}
                        priority
                        />
                  </div>
                </div>
              

            </div>

            <div className="w-full flex gap-[2px] justify-between">
              <div className="flex flex-col items-center gap-1 p-1 border-b-[#6144E8] border-b-[1px]">
                <div className="bg-[#6144E8] h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-[6px]">TUE</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">WED</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">THU</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">FRI</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">SAT</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">SUN</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-1 border-[#6144E8] border-opacity-25  border-b-[1px]">
                <div className="border-[1px] border-[#6144E8] border-opacity-25 h-[8px] w-[8px] rounded-full"></div>
                <span className="text-[#6144E8] text-opacity-30 text-[6px]">MON</span>
              </div>


            </div>

            <div className="flex justify-between">
              <span>Daily activities</span>
              <div className="flex text-gray-400 items-center" >
                <span >View history</span>
                <MdKeyboardArrowRight color="gray"/>

              </div>
            </div>
            
            <div className="flex justify-between gap-1 w-[190%]"  >
            <div className="absolute -left-[155px] top-[112px] shadow-md rounded-[10px] overflow-hidden w-[160px] h-[170px] bg-white">
              <div className="overflow-hidden">
                  <Image
                    src="/assets/doodle2.png"
                    alt="doodleimage"
                    width={400}
                    height={20}
                    priority
                    />
                </div> 
                  <div className="p-4 space-y-1">
                  <h1 className="text-[10px] font-semibold">Can you find what best calms you down?</h1>
                  <div className="flex gap-2">
                    <span>Practice</span>
                    <div className="flex items-center gap-1">
                        <AiOutlineClockCircle/>
                        <span>4 mins</span>
                    </div>
                  </div>
                  </div>
                  
                </div>

                <div className="shadow-md rounded-[10px] overflow-hidden w-[160px]">
                  <Image
                    src="/assets/doodle1.png"
                    alt="doodleimage"
                    width={400}
                    height={30}
                    priority
                    />
                  <div className="p-4 space-y-1">
                  <h1 className="text-[10px] font-semibold">Can you get yourself out of "anger autopilot" and think clearly again?</h1>
                  <div className="flex gap-2">
                    <span>Practice</span>
                    <div className="flex items-center gap-1">
                        <AiOutlineClockCircle/>
                        <span>3 mins</span>
                    </div>
                  </div>
                  </div>
                  
                </div>
              
                <div className="shadow-md rounded-[10px] overflow-hidden w-[160px] bg-white">
              <div className="overflow-hidden">
                  <Image
                    src="/assets/doodle2.png"
                    alt="doodleimage"
                    width={400}
                    height={20}
                    priority
                    />
                </div> 
                  <div className="p-4 space-y-1">
                  <h1 className="text-[10px] font-semibold">Can you find what best calms you down?</h1>
                  <div className="flex gap-2">
                    <span>Practice</span>
                    <div className="flex items-center gap-1">
                        <AiOutlineClockCircle/>
                        <span>4 mins</span>
                    </div>
                  </div>
                  </div>
                  
                </div>
            </div>

            <div className="flex justify-center gap-1 pt-[5px]">
              
              <div className="h-[2px] bg-gray-300 w-[20px] rounded-full"></div>
              <div className="h-[2px] bg-[#6144E8] w-[20px] rounded-full"></div>
              <div className="h-[2px] bg-gray-300 w-[20px] rounded-full"></div>
            </div>
            </div>

            <div className="border-t-[1px] border-gray-200 flex items-center justify-evenly py-2">

                <AiFillGift 
                  size="12px"
                  color="#7C61BA"
                   /> 
                <div className="flex bg-[#7C61BA] h-[16px] w-[16px] items-center justify-center rounded-full">
                  <AiOutlinePlus
                  size="12px"
                  color="#ffffff"/>
                </div>
                <AiFillSecurityScan
                size="12px"
                color="#7C61BA"/>
            </div>

          </div>
        </div>
        {/* Mobile Frame Ends Here */}
      
        </div>
      </section>



    {/*-------------------- FACTS SECTION 1 ------------------------------- */}

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

    {/*-------------------- EMOTION CARD SECTION ------------------------------- */}
    <section className="space-y-16 py-[50px]">
        <h1 className="mx-[30px] text-6xl font-semibold">Does this sound familiar...</h1>
        <div className="flex gap-10 w-[150%]  items-center">
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
  
         <Card
          emoji="😒"
          heading="You are at a lively dinner party"
          para="You play on your phone, instead of confidently
          approaching strangers and striking up a chat."
           backgroundColor="#f4dab1"
          textColor="#000000"
          height='190px'
        />
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
      </section>

    {/*-------------------- INTRO SECTION 2 ------------------------------- */}
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


    {/*-------------------- SCROLL SECTION ------------------------------- */}
    <section >
          <div className="mx-[100px]">
          <p className="text-2xl">Wrong with self-improvement & how we're fixing it.</p>
          <h1 className="text-6xl font-semibold">Self-improvement. Ugh.</h1>
          </div>
        


        <div className="h-[70vh] w-full flex mt-[50px] my-[100px] overflow-y-scroll">
          <div className="mx-[300px]">
            <div className="  bg-[#6442EF] w-[3px] h-[800px] relative text-xl">

              {/* point 1 */}
             <div className="absolute -top-[10px] -left-[13px] flex gap-5">
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
             <div className="absolute top-[200px] -left-[13px] flex gap-5">
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
             <div className="absolute top-[400px] -left-[13px] flex gap-5">
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
             <div className="absolute top-[600px] -left-[13px] flex gap-5">
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
             <div className="absolute top-[800px] -left-[13px] flex gap-5">
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
        

          <div className="h-full flex flex-col gap-8 pr-[50px] overflow-y-scroll" id="custom-scrollbar">
            <div className={poppins.className} >
          <h1 className="text-end text-6xl mb-[20px] font-semibold text-[#643FF4] font-">ahead</h1>
          </div>
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


      <section className="mx-[100px]">
        <h1 className="text-6xl font-semibold my-[50px]">Open vancancies</h1>
        <div className="flex justify-between gap-10 text-sm">
          <div className="bg-[#FEFBEC] p-10 rounded-[20px] space-y-2 ">
          <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
            <ul className="text-slate-700 list-disc ml-5 space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>65-85k, 0.5-1.5% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FEFBEC] p-10 rounded-[20px] space-y-2">
          <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
            <ul className="text-slate-700 list-disc ml-5 space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>65-85k, 0.5-1.5% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FEFBEC] p-10 rounded-[20px] space-y-2">
          <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
            <ul className="text-slate-700 list-disc ml-5 space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>65-85k, 0.5-1.5% equity share options</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-[80px] border-[1px]" />

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
