import { BackgroundBeams } from "../lib/AuroraBackground";


export default function HeroSection() {
  return (
    <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I Am <u>Vinay</u> A <span className="text-purple-600">MERN STACK</span> DEVELOPER
        </h1>
      <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-6 text-sm text-center relative z-10">
          As a passionate MERN stack developer, I specialize in building dynamic
          and responsive web applications. With expertise in 
          <span className="text-purple-600"> Express.js, React, and Node.js, MongoDB</span>
         I create seamless and efficient
          solutions tailored to client needs.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
