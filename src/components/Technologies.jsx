import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-neutral-300">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 text-4xl text-neutral-300">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
