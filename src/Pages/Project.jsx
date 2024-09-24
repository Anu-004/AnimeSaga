import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./project.css";
import er from "../assets/error.png";

const Project = () => {
  const [animeName, setAnimeName] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // For handling pagination
  const [totalPages, setTotalPages] = useState(1); // To track total pages from API
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false);

  // Fetch anime based on search or random data
  useEffect(() => {
    const fetchAnimeData = () => {
      const query = animeName
        ? `q=${animeName}&page=${currentPage}`
        : `page=${currentPage}`;
      fetch(`https://api.jikan.moe/v4/anime?${query}`)
        .then((response) => response.json())
        .then((data) => {
          setAnimeData(data.data.slice(0, 6)); // Show 6 results
          setTotalPages(data.pagination.last_visible_page); // Update total pages
        })
        .catch(() => setError(true))
        .finally(() => setLoad(false));
    };

    if (searchClicked || !animeName) {
      fetchAnimeData();
    }
  }, [animeName, currentPage, searchClicked]);

  // Handle search input change
  const handleInputChange = (e) => {
    setAnimeName(e.target.value);
    setCurrentPage(1); // Reset to page 1 on a new search
    setSearchClicked(false); // Disable search trigger while typing
  };

  // Handle search action
  const handleSearch = () => {
    setSearchClicked(true);
  };

  // Scroll reveal animation component
  const RevealCard = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
      if (inView && searchClicked) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView, searchClicked]);

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

  // Handle pagination actions
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {load && <span className="loader"></span>}
      <div className="flex justify-center items-center h-full">
        {error && (
          <img src={er} alt="error" className="object-contain max-w-2xl" />
        )}
      </div>

      {!load && !error && (
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
          <button
            className="btn  px-6 py-3 bg-gradient-to-r from-purple-600 to-sky-600 text-white font-medium rounded-lg shadow-2xl hover:from-purple-500 hover:to-sky-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleSearch}
          >
            Search
          </button>

          {/* Grid to display either search results or random anime */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {animeData.map((anime) => (
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
                    <p>Rating: {anime.score}/10</p>
                    <div className="card-actions justify-end">
                      <a
                        href={`https://myanimelist.net/anime/${anime.mal_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Know More!
                      </a>
                    </div>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="join grid grid-cols-2 mt-8">
            <button
              className="join-item btn btn-outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1} // Disable if on the first page
            >
              Previous page
            </button>
            <button
              className="join-item btn btn-outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages} // Disable if on the last page
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
