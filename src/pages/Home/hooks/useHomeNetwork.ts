import { useCallback, useEffect, useState } from "react";
import { Movie, MovieResponse } from "../../../models/movie-model";
import { API_GET_MOVIES } from "../../../constants";
import useFilterParams from "../../../hooks/useFilterParams";
import { MovieFilterModel } from "../../../models/movie-filter-model";

export function useHomeNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);

  const { changeFilter } = useFilterParams<MovieFilterModel>({
    filters: { nameMovie: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${API_GET_MOVIES}&sort_by=release_date.desc&page=1`
        );
        const { results }: MovieResponse = await response.json();
        setData(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = useCallback((value: string) => {
    console.log(value);
  }, []);

  return { data, isLoading, handleSearch };
}
