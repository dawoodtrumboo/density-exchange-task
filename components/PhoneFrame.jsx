"use client";
import {
    AiFillFire,
    AiOutlineClockCircle,
    AiFillGift,
    AiOutlinePlus,
    AiFillSecurityScan
  } from 'react-icons/ai';

  
import {MdNetworkCell,
    MdNetworkWifi,
    MdKeyboardArrowRight
  } from 'react-icons/md'

import {IoBatteryFullSharp} from 'react-icons/io5'
import Image from "next/image";

import React, { useEffect} from "react";



export default function PhoneFrame(){

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting ) {
              entry.target.classList.add('box');
            } else {
              entry.target.classList.remove('box');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.dashedCircle');
    
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
    
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting ) {
              entry.target.classList.add('scale-up');
            } else {
              entry.target.classList.remove('scale-up');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.phone');
    
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
    
      }, []);

  
    let iconStyles = { color: "red" };
    return (
        <div  className=" w-[50%] h-[80%] flex items-center justify-center">
        {/* Parent of Dashed Circle */}
      <div  className="absolute h-[500px] w-[500px]">
        {/* Dashed Circle Starts Here */}
      <div className="box dashedCircle relative border-[2px] rounded-full h-[500px] w-[500px]
       border-dashed border-white flex items-center justify-center">
      
          <div className="absolute -top-14">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={100}
            height={10}
            priority
            />

          </div>

          <div className="absolute -right-10">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={100}
            height={10}
            priority
            />

          </div>

          <div className="absolute -bottom-[50px]">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={100}
            height={10}
            priority
            />

          </div>

          <div className="absolute left-12 bottom-[65px] rotate-[130deg]">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={30}
            height={10}
            priority
            />

          </div>

          <div className="absolute right-12 bottom-[70px] rotate-[30deg]">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={30}
            height={10}
            priority
            />

          </div>

          <div className="absolute right-12 top-[70px] rotate-[310deg]">
            <Image
            src="/assets/doodle3.png"
            alt="Doodle"
            width={30}
            height={10}
            priority
            />

          </div>
        
        <div className="absolute bg-[#DAD3F5] h-[350px] w-[350px] rounded-full">
        </div>
        </div>
        </div>
        {/* Mobile Frame Starts Here */}
        <div className=" relative space-y-8 z-10 ">
          <div className="scale-up phone h-[370px] w-[190px] overflow-auto flex flex-col justify-between text-[8px] rounded-[20px] border-[5px] border-slate-700 bg-white p-[5px]">
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
            <div className="absolute -left-[160px] top-[112px] shadow-md rounded-[10px] overflow-hidden w-[160px] h-[170px] bg-white">
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
    )
}