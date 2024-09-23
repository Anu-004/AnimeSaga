import html from "../assets/Logo/html.png";
import css from "../assets/Logo/css.png";
import framer from "../assets/Logo/framer.webp";
import js from "../assets/Logo/js.png";
import react from "../assets/Logo/react.png";
import tailwind from "../assets/Logo/tailwind.png";
import vite from "../assets/Logo/vite.png";
import daisy from "../assets/Logo/daisy.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
const Skills = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  // Transform progress to width percentage for scroll bar
  const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);
  return (
    <>
         <motion.div className="flex justify-center items-center h-screen" ref={ref}>
        <motion.div 
          style={{ scaleX: scrollXProgress }} 
          className="carousel carousel-center bg-neutral rounded-box h-96 w-10/12 my-20 mx-auto"
        >
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={html}
              alt="HTML"
              // className="rounded-box bg-slate-50 shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={css}
              alt="CSS"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={js}
              alt="JavaScript"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={react}
              alt="React"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={vite}
              alt="Vite"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={daisy}
              alt="Daisy UI"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={framer}
              alt="Daisy UI"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="carousel-item p-6 h-60 pr-6"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={tailwind}
              alt="Tailwind CSS"
              // className="rounded-box bg-slate-50 shadow-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
