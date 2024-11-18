import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "../../../components/base/SortByItems/utils/getSortParamsURL";
import { MovieResponse } from "../../../models/movie-model";
import { sortItems } from "../constants/sortItems";
import { setUrlApi } from "../utils/setUrlApi";

export function useHomeNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<MovieResponse>();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  useEffect(() => {
    if (!searchParams.has("title")) {
      const result = getSortParamsUrl(searchParams, sortItems);

      if (result) {
        setSearchParams({
          [result.option]: result.value,
          page,
        });
        return;
      }
      setSearchParams({
        release_date: "desc",
        page,
      });
    }
  }, [page, searchParams, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const url = setUrlApi({ page, searchParams, sortItems });

        const response = await fetch(url);

        const data: MovieResponse = await response.json();
        setData(data);
      } catch (error) {
        alert(`Error - ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, searchParams]);

  return {
    data,
    isLoading,
    title: searchParams.get("title"),
    page: Number(page),
  };
}
