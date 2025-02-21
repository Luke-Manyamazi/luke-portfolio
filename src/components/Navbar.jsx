import logo from "../assets/lukeManyamaziLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="kr letters in white color" className="mx-2 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        <a
          href="https://www.linkedin.com/in/luke-manyamazi-5632b9331"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Luke-Manyamazi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.tiktok.com/@isirluke_?_t=ZM-8u72dzGkavf&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.facebook.com/luke.dube.982"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
