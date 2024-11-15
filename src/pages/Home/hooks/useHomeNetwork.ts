import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "../../../components/base/SortByItems/utils/getSortParamsURL";
import { Movie, MovieResponse } from "../../../models/movie-model";
import { sortItems } from "../constants/sortItems";
import { setUrlApi } from "../utils/setUrlApi";

export function useHomeNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("title")) {
      const result = getSortParamsUrl(searchParams, sortItems);

      if (result) {
        setSearchParams({ [result.option]: result.value, page: "1" });
        return;
      }
      setSearchParams({ release_date: "desc", page: "1" });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const url = setUrlApi(searchParams, sortItems);
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
