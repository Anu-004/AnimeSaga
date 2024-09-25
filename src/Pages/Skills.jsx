import html from "../assets/html.png";
import css from "../assets/css.png";
import framer from "../assets/framer.webp";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";
import daisy from "../assets/daisy.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Skills = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  // Transform progress to width percentage for scroll bar
  const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);
  return (
    <>
      <h3 className="text-xl font-bold text-center mt-20">
        AnimeSaga is a web application that utilizes a modern and efficient tech
        stack to ensure a smooth and interactive user experience. It ensures a
        high-performance, visually appealing, and responsive component that's
        ideal for modern web development projects.
      </h3>
      <motion.div
        className="flex justify-center items-center h-screen"
        ref={ref}
      >
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="carousel carousel-center bg-neutral rounded-box h-96 w-10/12 my-20 mx-auto"
        >
          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={html} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">HTML</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={css} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">CSS</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={js} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">JavaScript</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={react} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">React JS</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={vite} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Vite</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={daisy} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Daisy UI</p>
            </div>
          </motion.div>

                   <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={framer} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Framer Motion</p>
            </div>
          </motion.div>

          <motion.div
            className="carousel-item p-6 h-60 relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={tailwind} alt="HTML" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Tailwind</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
