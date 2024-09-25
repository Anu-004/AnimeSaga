import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import anime from "../assets/anime.webp"
const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: false }); // Will trigger every time it enters the viewport
  const isInView2 = useInView(ref2, { once: false });

  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <img src={anime} alt="" />
        <img
            src="../src/assets/react.png"
            className="max-w-sm rounded-lg border shadow-2xl shadow-zinc-600"
            alt="react"
          />
      <div className="hero min-h-screen">
        <motion.div
          ref={ref1}
          className="hero-content flex-col lg:flex-row-reverse"
          variants={sectionVariant}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
        >
        
          <div>
            <h1 className="text-5xl font-bold">About AnimeSaga</h1>
            <p className="py-6 font-semibold">
              Welcome to AnimeSaga, your ultimate destination to explore the
              world of anime! Whether you're a seasoned otaku or just starting
              your journey into the vibrant world of Japanese animation,
              AnimeSaga has something for everyone.
            </p>
           <a href='/projects'> <button className="btn btn-primary">Get Started</button></a>
          </div>
        </motion.div>
      </div>


      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../src/assets/vite.png)",
        }}
      >
    
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ANIME</h1>
            <p className="mb-5 font-medium text-xl">
              Anime, short for “animation,” is a style of animated entertainment
              originating from Japan. It encompasses a wide range of genres and
              themes, from action and adventure to romance and science fiction.
              Anime is known for its vibrant art, unique characters,distinctive style of cartoons and
              imaginative storytelling. 
              Whether you’re into epic battles, heartfelt dramas, or fantastical
              worlds, there’s an anime out there for everyone!
            </p>
          </div>
          </div>
         
      </div>

      <motion.div
          ref={ref2}
          variants={sectionVariant}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
        >
      <div className="collapse collapse-arrow bg-base-200 mt-20">
        
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is in AnimeSaga?
        </div>
        <div className="collapse-content">
          <p>
            AnimeSaga is a dedicated platform for anime lovers where users can explore a vast collection of anime shows and movies.
            The purpose of AnimeSaga is to provide anime enthusiasts with a seamless experience for discovering, searching, and learning about their favorite anime.
          </p>
        </div>
      </div> <br /> 
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How can users search for and explore anime on AnimeSaga?
        </div>
        <div className="collapse-content">
          <p>
          Allow users to search for specific anime titles, browse trending series, and discover hidden gems. 
          </p>
        </div>
      </div><br /> 
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What type of information does AnimeSaga offer about anime?
        </div>
        <div className="collapse-content">
          <p>
        Offer detailed information about a wide range of anime, including descriptions, images, and links to official pages like MyAnimeList.

          </p>
        </div>
        
        </div>
        </motion.div><br /> <br /> <br /> 
    </>
  );
};

export default About;
