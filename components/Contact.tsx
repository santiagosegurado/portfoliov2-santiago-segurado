import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-14">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Ponte en contacto
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Trabajemos <br /> Juntos!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all "
              placeholder="Email"
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
              placeholder="Nombre"
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all resize-none mb-12"
              placeholder="Mensaje"
            ></textarea>

            <button type="submit" className="btn btn-lg">
              Enviar Mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
