import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Mac from "./Mac";
import ComputersCanvas from "./canvas/ComputerCanvas";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-6 gap-y-16">
        {/* <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:flex hidden"
        >
          <Canvas style={{ width: "450px", height: "450px" }}>
            <Stage environment={"city"} intensity={0.8}>
              <Mac />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div> */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:flex-1 mt-[-50px] md:flex hidden"
        >
          <ComputersCanvas />
        </motion.div>
        <div className="flex flex-col lg:flex-1">
          <div>
            <motion.h2
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-accent h2"
            >
              Acerca de Mi.
            </motion.h2>
            <motion.h3
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h3"
            >
              Soy Full Stack Developer con 3 años de experiencia, siendo mi
              mayor virtud el Front End y Web Desing.
            </motion.h3>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-zinc-300 mb-3"
            >
              Desarrollador con gran capacidad de resolución de problemas a
              través de mi creatividad y mi perseverancia, ademas de siempre
              estar dispuesto a enseñar y aprender de los demás.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center gap-x-10"
          >
            <div className="flex flex-col gap-y-2">
              <div className="text-[40px] text-gradient">
                {inView ? <CountUp start={0} end={3} duration={2} /> : null}
              </div>
              <div className="text-sm">
                Años de <br /> Experiencia
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[40px] text-gradient">
                {inView ? <CountUp start={0} end={10} duration={2} /> : null}+
              </div>
              <div className="text-sm">
                Proyectos <br /> Realizados
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[40px] text-gradient">
                {inView ? <CountUp start={0} end={7} duration={2} /> : null}+
              </div>
              <div className="text-sm">Clientes</div>
            </div>
          </motion.div>
        </div>
        <div className="h-[300px]"></div>
      </div>
    </section>
  );
};
