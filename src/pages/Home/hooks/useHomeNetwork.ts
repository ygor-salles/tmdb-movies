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
      setSearchParams({ title: value, page: "1" });
      return;
    }

    searchParams.delete("title");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!searchParams.has("title")) {
      const sortOptions = ["release_date", "popularity", "vote_average"];

      for (const option of sortOptions) {
        if (searchParams.has(option)) {
          const value = searchParams.get(option) ?? "desc";
          setSearchParams({ [option]: value, page: "1" });
          return;
        }
      }
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const title = searchParams.get("title");

    const fetchData = async () => {
      setIsLoading(true);

      try {
        let sort_by;
        const sortOptions = ["release_date", "popularity", "vote_average"];

        for (const option of sortOptions) {
          if (searchParams.has(option)) {
            const value = searchParams.get(option) ?? "desc";
            sort_by = `${option}.${value}`;
          }
        }

        sort_by = sort_by ?? "release_date.desc";

        const url = title
          ? `${API_FILTER_MOVIES}&query=${title}&page=1`
          : `${API_GET_MOVIES}&sort_by=${sort_by}&page=1`;

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
