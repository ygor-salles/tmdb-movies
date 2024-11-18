import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../../../../../constants";
import { ITrailerResponse } from "../../../../../../models/trailer-model";

interface IUseGetTrailer {
  movieId: number;
}

export function useGetTrailer({ movieId }: IUseGetTrailer) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrailer = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        const data: ITrailerResponse = await response.json();

        const trailer = data.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        setTrailerKey(trailer?.key ?? null);
      } catch (error) {
        alert(`Error - ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { trailerKey, isLoading };
}
