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
            <Link>
             <FaFacebook className="text-white text-xl"/>
            </Link>
            <Link>
             <RiInstagramFill className="text-white text-xl"/>
            </Link>
            <Link>
             <FaLinkedin className="text-white text-xl"/>
            </Link>
            <Link>
             <FaGithub className="text-white text-xl"/>
            </Link>

        </div>
        </div>
    </div>
  )
}
