import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <div className="w-full h-full  text-center grid grid-cols-12 grid-rows-12 justify-center flex-col items-center gap-2">
      <h2 className="mb-4 col-span-12 row-span-3 ">CONTACT ME.</h2>

      <div className="flex col-span-full row-[5/8] md:col-span-full gap-4 justify-between h-fit">
        <a
          className="animate-floating"
          href="https://www.linkedin.com/in/themba-mtshelwane/"
          target="_blank"
        >
          <FaLinkedin className="text-4xl sm:text-9xl" />
        </a>
        <a
          className="animate-[floating_2s_ease-in-out_infinite]"
          href="https://github.com/ThembaMtshelwane"
          target="_blank"
        >
          <FaGithub className="text-4xl sm:text-9xl" />
        </a>
        <a
          className="animate-[floating_5s_ease-in-out_infinite]"
          href="https://x.com/ThembaMM3"
          target="_blank"
        >
          <FaXTwitter className="text-4xl sm:text-9xl" />
        </a>
      </div>

      <div className="flex gap-20 col-span-full row-[10/13] items-center justify-center">
        <a
          className="animate-[floating_3.5s_ease-in-out_infinite]"
          href="mailto:thembamm3@gmail.com"
        >
          <TfiEmail className="text-4xl sm:text-9xl" />
        </a>
        <a
          className="animate-[floating_4s_ease-in-out_infinite]"
          href="https://wa.me/27844804140"
          target="_blank"
        >
          <ImWhatsapp className="text-4xl sm:text-9xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
