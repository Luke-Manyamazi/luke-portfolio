import aboutImg from "../assets/lukeManyamaziProfile.png";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-neutral-300">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              alt="Luke Manyamazi on a gray background"
              className="rounded-2xl brightness-90 bg-gradient-to-tl from-black via-transparent to-black opacity-50"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start text-neutral-300">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
