import Image from "next/image"
import CustomButton from "./CustomButton"
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-[100px] bg-white py-[15px]">
           <Image
           src="/assets/logo.jpg"
           alt="Logo"
           width={50}
           height={20}
           priority
           className="rounded-[10px]"
           />

           <div className="space-x-10">
            <a href="#">Emotions</a>
            <a href="#">Manifesto</a>
            <a href="#">Self-awareness test</a>
            <a href="#">Work With Us</a>
           </div>
           <div>
            <CustomButton
                name="Download app"
            />
           </div>

           
        </nav>
    )
}