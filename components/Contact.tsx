import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import { fadeIn } from "../variant";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setForm({
      email: "",
      name: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ke5owa7",
        "template_mp2xyfb",
        e.target,
        "user_E1QzB3C7wfdHQlTevkVFN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("El mail se envio correctamente!");
        },
        (error) => {
          console.log(error.text);
          toast("No se pudo enviar el mail", error);
        }
      );
    handleReset();
  };

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
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
              placeholder="Nombre"
              name="name"
              onChange={handleChange}
              value={form.name}
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all "
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
              placeholder="Asunto"
              name="subject"
              onChange={handleChange}
              value={form.subject}
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all resize-none mb-12"
              placeholder="Mensaje"
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn btn-lg">
              Enviar Mensaje
            </button>
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </section>
  );
};
