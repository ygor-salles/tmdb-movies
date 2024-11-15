import { useEffect, useState } from "react";
import { API_GET_MOVIES } from "../../../constants";
import { Movie, MovieResponse } from "../../../models/movie-model";
import { useSearchParams } from "react-router-dom";
import { API_FILTER_MOVIES } from "../../../constants/apiFilterMovies";

export function useHomeNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (value: string | undefined) => {
    if (value) {
      setSearchParams({ title: value });
      return;
    }

    searchParams.delete("title");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const title = searchParams.get("title");

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const url = title
          ? `${API_FILTER_MOVIES}&query=${title}&page=1`
          : `${API_GET_MOVIES}&sort_by=release_date.desc&page=1`;

        const response = await fetch(url);
        const { results }: MovieResponse = await response.json();
        setData(results);
      } catch (error) {
        alert(`Error - ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return { data, isLoading, title: searchParams.get("title"), handleSearch };
}
