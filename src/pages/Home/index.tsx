import { InputSearch, MovieCard } from "../../components/base";
import { BaseLayout } from "../../components/layout";
import { API_IMAGE_URL } from "../../constants/apiImageUrl";
import { useHomeNetwork } from "./hooks/useHomeNetwork";

export function Home() {
  const { data, title, handleSearch, isLoading } = useHomeNetwork();

  console.log(title);

  return (
    <BaseLayout>
      <InputSearch onSearch={handleSearch} defaultValue={title} />

      {isLoading ? (
        <span>Loading...</span>
      ) : (
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
      )}
    </BaseLayout>
  );
}
