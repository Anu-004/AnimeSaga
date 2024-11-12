import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import er from "../assets/error.png";

const Project = () => {
  const [animeName, setAnimeName] = useState("");
  const [searchClicked, setSearchClicked] = useState(true);
  const [animeData, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const itemsPerPage = 6;

  const fetchAnimeData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${animeName}&page=${currentPage}&limit=${itemsPerPage}`
      );
      setAnimeData(response.data.data);
      setTotalPages(response.data.pagination.last_visible_page);
      setError(false);
    } catch (error) {
      console.error("Error fetching anime data:", error);
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (searchClicked || currentPage > 1) {
      fetchAnimeData();
      setSearchClicked(false); // Reset searchClicked after fetching
    }
  }, [searchClicked, animeName, currentPage]);

  const handleSearch = () => {
    setSearchClicked(true);

    setCurrentPage(1); // Reset to the first page on a new search
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
        <div className="flex flex-col items-center gap-4 ">
          <input
            type="text"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            placeholder="Search for an Anime"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            className="btn px-6 py-3 bg-gradient-to-r from-purple-600 to-sky-600 text-white font-medium rounded-lg shadow-2xl hover:from-purple-500 hover:to-sky-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleSearch}
          >
            Search
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
            {animeData.map((anime) => (
              <div key={anime.mal_id}>
                <div className="card glass w-[340px] h-[560px]">
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
              </div>
            ))}
          </div>

          <div className="join grid grid-cols-2 mt-8">
            <button
              className="join-item btn btn-outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <button
              className="join-item btn btn-outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
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
