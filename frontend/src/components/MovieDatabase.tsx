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

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = 'movie-dialog-title';

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
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.results) {
        const moviesWithDates = data.results.filter((movie: any) => movie.release_date && movie.release_date.trim() !== '');
        if (isForSuggestions) {
          setSuggestions(moviesWithDates.slice(0, 5));
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

  // Open dialog when selectedMovie is set
  useEffect(() => {
    if (selectedMovie && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [selectedMovie]);

  // Close on Escape is handled natively by <dialog>, but sync state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setSelectedMovie(null);
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, []);

  const handleSuggestionClick = (movie: Movie) => {
    setSearchTerm(movie.title);
    setShowSuggestions(false);
    searchMovies(movie.title);
  };

  // Debounced suggestions
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

  return (
    <div className="min-h-screen pattern-stars">
      <div className="container mx-auto px-6 py-8">

        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block mb-6 btn-secondary text-sm px-5 py-2"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4">
            Did They Age Well? <span aria-hidden="true">🎬</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            A curated database exploring how classic movies hold up in today's world.
            Search for movies and discover thoughtful assessments of their lasting impact.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="personality-card p-6">
            <div className="relative">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <label htmlFor="movie-search" className="sr-only">Search for a movie</label>
                  <input
                    id="movie-search"
                    type="search"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchMovies(searchTerm)}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="input-styled"
                    aria-autocomplete="list"
                    aria-controls="suggestions-list"
                    aria-expanded={showSuggestions}
                  />

                  {/* Suggestions dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <ul
                      id="suggestions-list"
                      role="listbox"
                      aria-label="Movie suggestions"
                      className="absolute top-full left-0 right-0 bg-white border border-surface-variant rounded-xl shadow-lg z-10 mt-1 overflow-hidden"
                    >
                      {suggestions.map((movie) => (
                        <li
                          key={movie.id}
                          role="option"
                          aria-selected="false"
                          onClick={() => handleSuggestionClick(movie)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSuggestionClick(movie)}
                          tabIndex={0}
                          className="flex items-center p-3 hover:bg-surface-container-low cursor-pointer border-b border-surface-container last:border-b-0"
                        >
                          {movie.poster_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                              alt=""
                              aria-hidden="true"
                              className="w-8 h-12 object-cover rounded mr-3 flex-shrink-0"
                            />
                          )}
                          <div className="flex-1">
                            <div className="font-label font-semibold text-on-surface">{movie.title}</div>
                            <div className="font-body text-sm text-on-surface-variant">
                              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  onClick={() => searchMovies(searchTerm)}
                  disabled={loading}
                  className="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={loading}
                >
                  {loading ? 'Searching…' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Results */}
        {movies.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {movies.map((movie) => (
              <div key={movie.id} className="personality-card hover-lift flex flex-col">
                <div className="p-4 flex flex-col flex-1">
                  {movie.poster_path && (
                    <div className="w-full h-64 mb-4 rounded-lg overflow-hidden bg-surface-container-low">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <h3 className="font-headline font-bold text-on-surface mb-2">{movie.title}</h3>

                  <div className="flex justify-between items-center mb-4">
                    <p className="font-body text-on-surface-variant text-sm">
                      {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                    </p>
                    {movie.vote_average && (
                      <div className="flex items-center bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-xs font-bold">
                        <span aria-hidden="true">⭐</span>
                        <span className="ml-1">{movie.vote_average.toFixed(1)}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => getMovieDetails(movie.id)}
                    className="btn-primary w-full mt-auto"
                    aria-label={`View details for ${movie.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No results */}
        {movies.length === 0 && searchTerm && !loading && (
          <div className="text-center">
            <div className="personality-card p-8">
              <p className="font-body text-on-surface-variant">No movies found for "{searchTerm}". Try a different search term!</p>
            </div>
          </div>
        )}

        {/* Getting started */}
        {movies.length === 0 && !searchTerm && (
          <div className="text-center">
            <div className="personality-card p-8">
              <h2 className="font-headline font-bold text-xl text-on-surface mb-4">Ready to Explore? <span aria-hidden="true">🍿</span></h2>
              <p className="font-body text-on-surface-variant">
                Search for classic movies to see how they've aged over time.
                Start with something like "Casablanca", "The Godfather", or "Citizen Kane"!
              </p>
            </div>
          </div>
        )}

        {/* Movie Detail Dialog */}
        {selectedMovie && (
          <dialog
            ref={dialogRef}
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="bg-transparent border-none p-0 max-w-2xl w-full"
            style={{ position: 'fixed', margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <div className="personality-card w-full overflow-hidden m-4">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 id={dialogTitleId} className="font-headline font-bold text-2xl text-on-surface">{selectedMovie.title}</h2>
                  <button
                    onClick={closeModal}
                    aria-label="Close dialog"
                    className="text-on-surface-variant hover:text-on-surface text-xl leading-none ml-4 flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedMovie.poster_path && (
                    <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                        alt={`${selectedMovie.title} poster`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  <div className="space-y-4 font-body text-on-surface-variant">
                    <div><strong className="text-on-surface">Release Date:</strong> {selectedMovie.release_date || 'N/A'}</div>
                    {selectedMovie.vote_average && (
                      <div className="flex items-center gap-2">
                        <strong className="text-on-surface">Rating:</strong>
                        <div className="flex items-center bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-sm font-bold">
                          <span aria-hidden="true">⭐</span>
                          <span className="ml-1">{selectedMovie.vote_average}/10</span>
                        </div>
                      </div>
                    )}
                    {selectedMovie.original_language && (
                      <div><strong className="text-on-surface">Language:</strong> {selectedMovie.original_language.toUpperCase()}</div>
                    )}
                    {selectedMovie.overview && (
                      <div><strong className="text-on-surface">Overview:</strong> {selectedMovie.overview}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default MovieDatabase;
