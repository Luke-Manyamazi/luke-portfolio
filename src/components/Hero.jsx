import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/lukeManyamaziProfile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-neutral-300">
              Luke Manyamazi
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Software Engineer & FSD - Trainee
            </span>
            <p className="text-neutral-300 my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Luke Manyamazi on a red background"
              className="rounded-2xl brightness-90 bg-gradient-to-tl from-black via-transparent to-black opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
