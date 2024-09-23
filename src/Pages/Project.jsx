// // import React, { useEffect, useState } from 'react';
// // import "./project.css";
// // function Project() {
// //   const [animeList, setAnimeList] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Fetch anime data from Jikan API
// //   // useEffect(() => {
// //   //   fetch('https://api.jikan.moe/v4/anime')
// //   //     .then((response) => response.json())
// //   //     .then((data) => {
// //   //       setAnimeList(data.data); // Set the fetched data
// //   //       setLoading(false); // Set loading to false after fetching
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error('Error fetching anime data:', error);
// //   //       setLoading(false);
// //   //     });
// //   // }, []);

// //   if (loading) {
// //     return <span class="loader"></span>
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <h1>Anime List</h1>
// //       <div style={styles.animeGrid}>
// //         {animeList.map((anime) => (
// //           <div key={anime.mal_id} style={styles.animeCard}>
// //             <img src={anime.images.jpg.large_image_url} alt={anime.title} style={styles.animeImage} />
// //             <h3>{anime.title}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // Simple CSS styles
// // const styles = {
// //   container: {
// //     textAlign: 'center',
// //     marginTop: '20px',
// //   },
// //   animeGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// //     gap: '20px',
// //     padding: '20px',
// //   },
// //   animeCard: {
// //     padding: '10px',
// //     border: '1px solid #ddd',
// //     borderRadius: '10px',
// //     boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
// //   },
// //   animeImage: {
// //     width: '100%',
// //     borderRadius: '10px',
// //     height: 'auto',
// //   },
// // };

// // export default Project;
// // -----------------------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import { motion, useInView } from 'framer-motion';

// const Project = () => {
//   const [animeName, setAnimeName] = useState(""); // To hold the input value
//   const [animeData, setAnimeData] = useState([]); // To hold search results
//   const [randomAnime, setRandomAnime] = useState([]); // To hold random anime on load

//   // Fetch random anime when the component mounts
//   useEffect(() => {
//     fetch("https://api.jikan.moe/v4/anime")
//       .then((response) => response.json())
//       .then((data) => {
//         const shuffledAnime = data.data.sort(() => 0.5 - Math.random()); // Shuffle results randomly
//         setRandomAnime(shuffledAnime.slice(0, 15)); // Limit to 15 results
//       })
//       .catch((error) => console.error("Error fetching random anime:", error));
//   }, []); // Empty dependency array, fetch only when the component loads

//   // Handle search input change
//   const handleInputChange = (e) => {
//     setAnimeName(e.target.value);
//   };

//   // Handle search action (fetching anime by search query)
//   const handleSearch = () => {
//     fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAnimeData(data.data.slice(0, 15)); // Display only 15 search results
//       })
//       .catch((error) => console.error("Error fetching searched anime:", error));
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       {/* Input for searching anime */}
//       <input
//         type="text"
//         placeholder="Search for an anime"
//         value={animeName}
//         onChange={handleInputChange}
//         className="input input-bordered w-full max-w-xs"
//       />

//       {/* Button to trigger the search */}
//       <button className="btn btn-primary" onClick={handleSearch}>
//         Search
//       </button>

//       {/* Grid to display either search results or random anime */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//         {/* Check if search results exist, otherwise display random anime */}
//         {animeData.length > 0
//           ? animeData.map((anime) => (
//               <div key={anime.mal_id} className="card glass w-96">
//                 <figure>
//                   <img src={anime.images.jpg.image_url} alt={anime.title} />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{anime.title}</h2>
//                   <p>
//                     Show Released On:
//                     {anime.type
//                       ? ` ${anime.type} in ${anime.year}`
//                       : "No description available"}
//                   </p>
//                   <div className="card-actions justify-end">
//                     <a
//                       href={`https://myanimelist.net/anime/${anime.mal_id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn btn-primary"
//                     >
//                      Know more!
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))
//           : randomAnime.map((anime) => (
//               <div key={anime.mal_id} className="card glass w-96 h-auto">
//                 <figure>
//                   <img src={anime.images.jpg.image_url} alt={anime.title} />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{anime.title}</h2>
//                   <p>
//                     Show Released On:
//                     {anime.type
//                       ? ` ${anime.type} in ${anime.year}`
//                       : "No description available"}
//                 </p>
//                 <p>Duration: {anime.duration}</p>
//                 <p>Rating: {anime.score}/10</p>
//                   <div className="card-actions justify-end">
//                     <a
//                       href={`https://myanimelist.net/anime/${anime.mal_id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn btn-primary"
//                     >
//                       Know More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Project;
// -----------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Project= () => {
  const [animeName, setAnimeName] = useState('');
  const [animeData, setAnimeData] = useState([]);
  const [randomAnime, setRandomAnime] = useState([]);

  // Fetch random anime when the component mounts
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then((response) => response.json())
      .then((data) => {
        const shuffledAnime = data.data.sort(() => 0.5 - Math.random());
        setRandomAnime(shuffledAnime.slice(0, 15));
      })
      .catch((error) => console.error('Error fetching random anime:', error));
  }, []);

  // Handle search input change
  const handleInputChange = (e) => {
    setAnimeName(e.target.value);
  };

  // Handle search action
  const handleSearch = () => {
    fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeData(data.data.slice(0, 15));
      })
      .catch((error) => console.error('Error fetching searched anime:', error));
  };

  // Scroll reveal animation settings
  const RevealCard = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Input for searching anime */}
      <input
        type="text"
        placeholder="Search for an anime"
        value={animeName}
        onChange={handleInputChange}
        className="input input-bordered w-full max-w-xs"
      />

      {/* Button to trigger the search */}
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      {/* Grid to display either search results or random anime */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {animeData.length > 0
          ? animeData.map((anime) => (
              <RevealCard key={anime.mal_id}>
                <div className="card glass w-96">
                  <figure>
                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{anime.title}</h2>
                    <p>
                     Show Released On:
                     {anime.type
                       ? ` ${anime.type} in ${anime.year}`
                       : "No description available"}
                 </p>

                      < p > Duration: {anime.duration}</p>
               <p>Rating: {anime.score}/10</p>                    <div className="card-actions justify-end">
                      <a
                        href={`https://myanimelist.net/anime/${anime.mal_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              </RevealCard>
            ))
          : randomAnime.map((anime) => (
              <RevealCard key={anime.mal_id}>
                <div className="card glass w-96">
                  <figure>
                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{anime.title}</h2>
                    <p>
                     Show Released On:
                     {anime.type
                       ? ` ${anime.type} in ${anime.year}`
                       : "No description available"}
                 </p>
                 <p>Duration: {anime.duration}</p>
                <p>Rating: {anime.score}/10</p>                    <div className="card-actions justify-end">
                      <a
                        href={`https://myanimelist.net/anime/${anime.mal_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Know more!
                      </a>
                    </div>
                  </div>
                </div>
              </RevealCard>
            ))}
      </div>
    </div>
  );
};

export default Project;
