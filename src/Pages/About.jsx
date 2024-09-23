import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
      <div className="hero min-h-screen">
        <motion.div
          ref={ref1}
          className="hero-content flex-col lg:flex-row-reverse"
          variants={sectionVariant}
          initial="hidden"
          animate={isInView1 ? 'visible' : 'hidden'}
        >
          <img
            src="../src/assets/anime.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Anime"
          />
          <div>
            <h1 className="text-5xl font-bold">About AnimeSaga</h1>
            <p className="py-6">
              Welcome to AnimeSaga, your ultimate destination to explore the
              world of anime! Whether you're a seasoned otaku or just starting
              your journey into the vibrant world of Japanese animation,
              AnimeSaga has something for everyone.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </motion.div>
      </div>

      <div className="hero min-h-screen -mt-80">
        <motion.div
          ref={ref2}
          className="hero-content text-center"
          variants={sectionVariant}
          initial="hidden"
          animate={isInView2 ? 'visible' : 'hidden'}
        >
          <div className="max-w-5xl">
            <h1 className="text-5xl font-bold">ANIME</h1>
            <p className="py-6">
              Anime, short for “animation,” is a style of animated entertainment
              originating from Japan. It encompasses a wide range of genres and
              themes, from action and adventure to romance and science fiction.
              Anime is known for its vibrant art, unique characters, and
              imaginative storytelling. Popular series like “Naruto,” “Attack on
              Titan,” and “My Hero Academia” have garnered global fanbases.
              Whether you’re into epic battles, heartfelt dramas, or fantastical
              worlds, there’s an anime out there for everyone!
            </p>
          </div>
        </motion.div>
      </div>

      {/* "AnimeSaga" is a dedicated platform for anime lovers where users can explore a vast collection of anime shows and movies. The purpose of AnimeSaga is to provide anime enthusiasts with a seamless experience for discovering, searching, and learning about their favorite anime. It aims to:

Explore Anime: Offer detailed information about a wide range of anime, including descriptions, images, and links to official pages like MyAnimeList.
Personalized Search: Allow users to search for specific anime titles, browse trending series, and discover hidden gems.
Community Engagement: Build a community for anime fans to interact, share recommendations, and stay updated with new releases.
AnimeSaga aims to be a one-stop destination for anime fans looking to immerse themselves in the world of anime. */}
    </>
  );
};

export default About;