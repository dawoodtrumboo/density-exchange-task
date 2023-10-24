import EmotionCard from "@/components/EmotionCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { AiFillStar } from 'react-icons/ai';

export default function Home() {
  return (
    <div className="pt-[100px]">
      <div className="bg-[#EEEBFE] mx-[30px] pl-[40px] h-[80vh] rounded-[30px] flex items-center">
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
      </div>





      <div className="flex mx-[100px] my-[100px] justify-between">
        
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
      </div>

      <div className="space-y-16">
        <h1 className="mx-[30px] text-6xl font-semibold">Does this sound familiar...</h1>
        <div className="flex gap-10 w-[150%]  items-center">
        <EmotionCard
          emoji="😠"
          heading="You argue with a colleague"
          para=" You get angry and defensive, instead of
          staying open and working towards
          common ground."
          backgroundColor="#EEEBFE"
          textColor="#000000"
          height='190px'

          
        />
          <EmotionCard
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
          <EmotionCard
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
  
         <EmotionCard
          emoji="😒"
          heading="You are at a lively dinner party"
          para="You play on your phone, instead of confidently
          approaching strangers and striking up a chat."
           backgroundColor="#f4dab1"
          textColor="#000000"
          height='190px'
        />
         <EmotionCard
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
  )
}
