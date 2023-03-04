import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-8">
          <div className="flex flex-1 flex-col gap-y-10">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 leading-tight text-accent">
                Mis Ultimos <br /> Proyectos
              </h2>
              <p className="max-w-sm text-zinc-300 mb-8">
                Proyectos mas relevantes en los que participe, siendo Full Stack
                con el Stack Mern y Front End con Next.js o JavaScript Puro.
              </p>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                type="button"
                className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 text-[16px]"
              >
                Contactame
              </Link>
            </motion.div>
            <NextLink href={"https://lenceriadanela.store/"}>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              >
                {/* overlay */}
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <Image
                  src="/lenceria.png"
                  alt="Calendar App"
                  height={500}
                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40 text-gradient">
                  WordPress
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-40">
                  <span className="text-zinc-300">
                    Lenceria Danela Ecommerce
                  </span>
                </div>
              </motion.div>
            </NextLink>
          </div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-1 flex-col gap-y-10"
          >
            <NextLink href={"https://frontend-calendar-app.vercel.app/"}>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <Image
                  src="/calendar.png"
                  alt="Calendar App"
                  height={500}
                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40 text-gradient">
                  Full Stack Development MERN
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-40">
                  <span className="text-zinc-300">Calendar App</span>
                </div>
              </div>
            </NextLink>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <Image
                src="/dashboard.png"
                alt="Calendar App"
                height={500}
                width={600}
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40 text-gradient">
                Full Stack Development PERN
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-40">
                <span className="text-zinc-300">
                  Dashboard Ecommerce Tienda Tech
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
