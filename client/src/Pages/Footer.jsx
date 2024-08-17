import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-slate-900 p-5">
        <div className="flex flex-col gap-2 md:flex-row justify-between max-w-[1200px] mx-auto font-medium">
        <div className="text-white text-xs md:text-sm">
         Developed By Vinay❤️ Using MERN STACK
        </div>
        <div className="flex gap-4 items-center ">
            <Link to="https://www.facebook.com/profile.php?id=100065309109404&mibextid=ZbWKwL" target="_blank">
             <FaFacebook className="text-white text-xl"/>
            </Link>
            <Link to="https://www.instagram.com/__vinay__04/" target="_blank">
             <RiInstagramFill className="text-white text-xl"/>
            </Link>
            <Link to="https://www.linkedin.com/in/vinay-prajapati-3329b3289" target="_blank">
             <FaLinkedin className="text-white text-xl"/>
            </Link>
            <Link to="https://github.com/thorreactdev" target="_blank">
             <FaGithub className="text-white text-xl"/>
            </Link>

        </div>
        </div>
    </div>
  )
}
