import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Stage,
  MeshDistortMaterial,
} from "@react-three/drei";
import Mac from "./Mac";

export const Banner = () => {
  return (
    <div id="home" className="section h-[85vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 md:flex-row items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-10 text-[36px] flex flex-col font-semisbold">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[30px] xl:text-[50px] font-bold"
              >
                Santiago <span className="text-gradient">Segurado</span>
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <TypeAnimation
                  sequence={["Full Stack", 2000, "Front End", 2000]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.h2
                variants={fadeIn("up", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-accent mt-4"
              >
                Developer
              </motion.h2>
            </div>
            <motion.div
              className="flex items-center gap-x-6 justify-center lg:justify-start"
              variants={fadeIn("up", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Contactame
              </Link>
              <Link
                className="text-gradient cursor-pointer"
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Mi Portafolio
              </Link>
            </motion.div>
            <motion.div
              className="flex gap-x-6 text-[25px] justify-center mt-4 lg:justify-start"
              variants={fadeIn("up", 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="https://github.com/santiagosegurado" target={'_blank'}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/santiago-segurado-frontend/" target={'_blank'}>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            className={"hidden md:flex"}
            variants={fadeIn("down", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Canvas style={{ width: "600px", height: "700px" }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 4, 2]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color={"#220736"}
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            {/* <Image
              src="/moon.png"
              alt="moon"
              title="moon"
              width={400}
              height={400}
              className="absolute top-16 left-16"
            /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
