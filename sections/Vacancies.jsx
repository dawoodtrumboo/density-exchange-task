import React, {useEffect,useRef} from 'react'
import CustomButton from "@/components/CustomButton";

const Vacancies = () => {

  const vacancyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vacancy-section");
        } else {
          entry.target.classList.remove("vacancy-section");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust if needed
      }
    );

    if (vacancyRef.current) {
      observer.observe(vacancyRef.current);
    }

    return () => {
      if (vacancyRef.current) {
        observer.unobserve(vacancyRef.current);
      }
    };
  }, []);


  return (
    <section ref={vacancyRef} className="vacancy-section mx-[100px]">
    <div className="vacancy-heading animate-in">
  <h1 className="text-6xl font-semibold my-[50px]">Open vancancies</h1>
  </div>
  <div className="vacancy-box flex justify-between gap-10 text-sm">
    {/* Vacany Card 1 */}
    <div className="v-box-1 bg-[#FEFBEC] p-10 rounded-[20px] space-y-2 ">
    <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
      <ul className="text-slate-700 list-disc ml-5 space-y-2">
        <li>Full-time position</li>
        <li>Berlin or remote</li>
        <li>65-85k, 0.5-1.5% equity share options</li>
      </ul>
      <div className="vacancy-btn">
        <CustomButton 
        name ="See details"
        />
      </div>
    </div>

    {/* Vacany Card 2 */}
    <div className="v-box-2 bg-[#FEFBEC] p-10 rounded-[20px] space-y-3">
    <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
      <ul className="text-slate-700 list-disc ml-5 space-y-2">
        <li>Full-time position</li>
        <li>Berlin or remote</li>
        <li>65-85k, 0.5-1.5% equity share options</li>
      </ul>
      <div className="vacancy-btn">
        <CustomButton 
        name ="See details"
        />
      </div>
    </div>

    {/* Vacany Card 3 */}
    <div className="v-box-3 bg-[#FEFBEC] p-10 rounded-[20px] space-y-2">
    <h1 className="text-lg font-semibold">Senior Full-Stack Engineer</h1>
      <ul className="text-slate-700 list-disc ml-5 space-y-2">
        <li>Full-time position</li>
        <li>Berlin or remote</li>
        <li>65-85k, 0.5-1.5% equity share options</li>
      </ul>
      <div className="vacancy-btn">
        <CustomButton 
        name ="See details"
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Vacancies