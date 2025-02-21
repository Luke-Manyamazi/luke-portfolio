import logo from "../assets/lukeManyamaziLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="kr letters in white color" className="mx-2 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        <motion.a
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/luke-manyamazi-5632b9331"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.1 }}
          href="https://github.com/Luke-Manyamazi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.1 }}
          href="https://www.tiktok.com/@isirluke_?_t=ZM-8u72dzGkavf&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.1 }}
          href="https://www.facebook.com/luke.dube.982"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
