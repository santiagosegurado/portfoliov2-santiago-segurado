import { useState, useRef } from "react";

// Img
import Image from "next/image";
import { Link } from "react-scroll";
import confetti from 'canvas-confetti'

import { Modal } from "./Modal";

export const Header = () => {
  
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleModalOpen = () => {

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0,
        y: 0
      }
    });

    setOpen(!open)
  };

  return (
    <header className="py-8">
      <Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="Santiago Segurado"
          title="Full Stack Developer"
          width={150}
          height={150}
          onDoubleClick={handleModalOpen}
        />
        <div>
          <Link
            to="contact"
            type="button"
            smooth={true}
            spy={true}
            className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base p-2 md:px-5 md:py-2.5 text-center mr-2 mb-2 text-[13px] lg:text-[16px] "
          >
            Trabajemos Juntos
          </Link>
        </div>
      </div>
    </header>
  );
};
