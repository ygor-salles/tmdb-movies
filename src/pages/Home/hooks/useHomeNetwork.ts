import { useEffect, useState } from "react";
import { API_GET_MOVIES, API_FILTER_MOVIES } from "../../../constants";
import { Movie, MovieResponse } from "../../../models/movie-model";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "../../../components/base/SortByItems/utils/getSortParamsURL";
import { sortItems } from "../constants/sortItems";

export function useHomeNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("title")) {
      const result = getSortParamsUrl(searchParams, sortItems);

      if (result) {
        setSearchParams({ [result.option]: result.value, page: "1" });
      }
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const title = searchParams.get("title");

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = getSortParamsUrl(searchParams, sortItems);
        const sort_by = result
          ? `${result.option}.${result.value}`
          : "release_date.desc";

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

  return { data, isLoading, searchParams, setSearchParams };
}
