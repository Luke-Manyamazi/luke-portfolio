import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT2 } from "../constants";
import profilePic from "../assets/lukeManyamaziProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

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
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-neutral-300"
            >
              Luke Manyamazi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Engineer - Student
            </motion.span>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer - Trainee
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 mb-0 my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 mt-0 my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT2}
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 flex justify-center py-10">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              width={400}
              height={400}
              alt="Luke Manyamazi on a red background"
              className="rounded-2xl brightness-75 bg-gradient-to-tl from-black via-transparent to-black opacity-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
