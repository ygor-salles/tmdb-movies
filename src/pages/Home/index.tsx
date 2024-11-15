import { InputSearch, MovieCard } from "../../components/base";
import { BaseLayout } from "../../components/layout";
import { API_IMAGE_URL } from "../../constants/apiImageUrl";
import { useHomeNetwork } from "./hooks/useHomeNetwork";

export function Home() {
  const { data, handleSearch, isLoading } = useHomeNetwork();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <BaseLayout>
      <InputSearch onSearch={handleSearch} />
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
