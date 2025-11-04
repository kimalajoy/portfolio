import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
  vote_average?: number;
  genre_ids?: number[];
  original_language?: string;
}

interface MovieAssessment {
  id: string;
  movieId: number;
  agedWellRating: number; // 1-5 scale
  assessment: string;
  reviewDate: string;
}

const MovieDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [assessments] = useState<MovieAssessment[]>([]); // Will integrate with PocketBase later
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const searchMovies = async (query: string, isForSuggestions = false) => {
    if (!query.trim()) {
      if (isForSuggestions) {
        setSuggestions([]);
        setShowSuggestions(false);
      } else {
        setMovies([]);
      }
      return;
    }

    if (!isForSuggestions) setLoading(true);

    try {
      const API_KEY = '3ece15435d25f71f23e5d0fc712aad79';
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.results) {
        // Filter out movies without release dates
        const moviesWithDates = data.results.filter((movie: any) => movie.release_date && movie.release_date.trim() !== '');

        if (isForSuggestions) {
          setSuggestions(moviesWithDates.slice(0, 5)); // Limit suggestions to 5
          setShowSuggestions(true);
        } else {
          setMovies(moviesWithDates);
          setShowSuggestions(false);
        }
      } else {
        if (isForSuggestions) {
          setSuggestions([]);
          setShowSuggestions(false);
        } else {
          setMovies([]);
        }
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      if (isForSuggestions) {
        setSuggestions([]);
        setShowSuggestions(false);
      } else {
        setMovies([]);
      }
    } finally {
      if (!isForSuggestions) setLoading(false);
    }
  };

  const getMovieDetails = async (movieId: number) => {
    setLoading(true);
    try {
      const API_KEY = '3ece15435d25f71f23e5d0fc712aad79';
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedMovie(null);
  };

  const getAssessment = (movieId: number) => {
    return assessments.find(assessment => assessment.movieId === movieId);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'bg-rose text-black'; // Aged very well
    if (rating >= 3) return 'bg-mint text-black'; // Aged well
    if (rating >= 2) return 'bg-peach text-black'; // Mixed aging
    return 'bg-coral text-black'; // Aged poorly
  };

  const getRatingText = (rating: number) => {
    if (rating >= 4) return 'Aged Beautifully';
    if (rating >= 3) return 'Aged Well';
    if (rating >= 2) return 'Mixed Results';
    return 'Aged Poorly';
  };

  // Debounced search for suggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() && searchTerm.length > 2) {
        searchMovies(searchTerm, true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSuggestionClick = (movie: Movie) => {
    setSearchTerm(movie.title);
    setShowSuggestions(false);
    searchMovies(movie.title);
  };

  // Open dialog when selectedMovie is set
  useEffect(() => {
    if (selectedMovie && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [selectedMovie]);

  return (
    <div className="min-h-screen bg-aurora knit-pattern">
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block mb-6 bg-coral text-black px-6 py-2 rounded-full font-semibold bounce-hover shadow-lg border-2 border-black"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Did They Age Well? 🎬
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A curated database exploring how classic movies hold up in today's world.
            Search for movies and discover thoughtful assessments of their lasting impact.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="personality-card p-6">
            <div className="relative">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchMovies(searchTerm)}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  />

                  {/* Suggestions Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
                      {suggestions.map((movie) => (
                        <div
                          key={movie.id}
                          onClick={() => handleSuggestionClick(movie)}
                          className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          {movie.poster_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                              alt={movie.title}
                              className="w-8 h-12 object-cover rounded mr-3"
                            />
                          )}
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">{movie.title}</div>
                            <div className="text-sm text-gray-500">
                              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => searchMovies(searchTerm)}
                  disabled={loading}
                  className="bg-mint text-black px-6 py-2 rounded-lg font-semibold bounce-hover border-2 border-black disabled:opacity-50"
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Results Grid */}
        {movies.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {movies.map((movie) => {
              const assessment = getAssessment(movie.id);
              return (
                <div key={movie.id} className="personality-card rounded-lg shadow-lg hover:shadow-xl transition-all movie-card">
                  <div className="p-4 card-content">
                    {movie.poster_path && (
                      <div className="w-full h-64 mb-4 bg-gray-200 rounded-lg overflow-hidden card-poster-container">
                        <img
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                          alt={movie.title}
                          className="w-full h-full object-cover card-poster-image"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-gray-800 mb-2">{movie.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-600 text-sm">Released: {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</p>
                      {movie.vote_average && (
                        <div className="flex items-center bg-coral text-black px-2 py-1 rounded-full text-xs font-bold">
                          ⭐ {movie.vote_average.toFixed(1)}
                        </div>
                      )}
                    </div>

                    {assessment && (
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRatingColor(assessment.agedWellRating)}`}>
                          {getRatingText(assessment.agedWellRating)}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => getMovieDetails(movie.id)}
                      className="w-full bg-peach text-black py-2 rounded-lg font-semibold bounce-hover border-2 border-black"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Movie Detail Dialog */}
        {selectedMovie && (
          <dialog
            ref={dialogRef}
            className="bg-transparent border-none p-0 max-w-2xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ position: 'fixed', margin: 'auto' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="personality-card w-full overflow-hidden modal-container m-4">
              <div className="p-6 modal-content">
                <div className="flex justify-between items-start mb-4 modal-header">
                  <h2 className="text-2xl font-bold text-gray-800 modal-title">{selectedMovie.title}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-xl modal-close-btn"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 modal-body">
                  {selectedMovie.poster_path && (
                    <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg poster-container">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                        alt={selectedMovie.title}
                        className="w-full h-auto max-h-80 object-cover rounded-lg modal-poster-image debug-image"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <strong>Release Date:</strong> {selectedMovie.release_date || 'N/A'}
                    </div>
                    {selectedMovie.vote_average && (
                      <div className="flex items-center gap-2">
                        <strong>Rating:</strong>
                        <div className="flex items-center bg-coral text-black px-2 py-1 rounded-full text-sm font-bold">
                          ⭐ {selectedMovie.vote_average}/10
                        </div>
                      </div>
                    )}
                    {selectedMovie.original_language && (
                      <div>
                        <strong>Original Language:</strong> {selectedMovie.original_language.toUpperCase()}
                      </div>
                    )}
                    {selectedMovie.overview && (
                      <div>
                        <strong>Overview:</strong> {selectedMovie.overview}
                      </div>
                    )}

                    {/* Assessment section - placeholder for now */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-bold mb-2">Assessment Coming Soon!</h3>
                      <p className="text-sm text-gray-600">
                        This feature will allow curated reviews of how well this movie has aged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}

        {/* No results message */}
        {movies.length === 0 && searchTerm && !loading && (
          <div className="text-center">
            <div className="personality-card p-8">
              <p className="text-gray-600">No movies found for "{searchTerm}". Try a different search term!</p>
            </div>
          </div>
        )}

        {/* Getting started message */}
        {movies.length === 0 && !searchTerm && (
          <div className="text-center">
            <div className="personality-card p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Explore? 🍿</h3>
              <p className="text-gray-600 mb-4">
                Search for classic movies to see how they've aged over time.
                Start with something like "Casablanca", "The Godfather", or "Citizen Kane"!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDatabase;