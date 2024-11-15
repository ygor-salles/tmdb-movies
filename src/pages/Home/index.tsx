import { useEffect, useState } from "react";

import { API_GET_MOVIES } from "../../constants/apiGetMovies";
import { BaseLayout } from "../../components/layout";
import { MovieCard } from "../../components/base";
import { Movie, MovieResponse } from "../../models/IModel";
import { API_IMAGE_URL } from "../../constants/apiImageUrl";
import { InputSearch } from "../../components/base/InputSearch";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${API_GET_MOVIES}&sort_by=release_date.desc&page=1`
        );
        const { results }: MovieResponse = await response.json();
        setData(results);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <BaseLayout>
      <InputSearch />
      <div className="flex gap-4 p-4 justify-center max-w-7xl flex-wrap">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterUrl={
              movie.poster_path ? `${API_IMAGE_URL}/${movie.poster_path}` : ""
            }
            releaseDate={movie.release_date}
            isAdult={movie.adult}
          />
        ))}
      </div>
    </BaseLayout>
  );
}
