// Icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

// Links
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full container mx-auto bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <a
            href="/CVSantiagoSegurado.pdf"
            download
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <AiOutlineFilePdf />
          </a>
          {/* <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="service"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link> */}
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};
