import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/lukeManyamaziProfile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex items-center justify-center ">
        {" "}
        {/* Ensures the content takes up full height of the screen */}
        <div className="flex flex-wrap w-full max-w-7xl px-4">
          {" "}
          {/* Added padding to avoid edge touch */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-neutral-300"
            >
              Luke Manyamazi
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Software Engineer & FSD - Trainee
            </span>
            <p className="text-neutral-300 my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 flex justify-center py-10">
            <img
              src={profilePic}
              width={400}
              height={400}
              alt="Luke Manyamazi on a red background"
              className="rounded-2xl brightness-90 bg-gradient-to-tl from-black via-transparent to-black opacity-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
