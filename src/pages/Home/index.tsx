import { InputSearch, MovieCard } from "../../components/base";
import { SortByItems } from "../../components/base/SortByItems";
import { BaseLayout } from "../../components/layout";
import { API_IMAGE_URL } from "../../constants/apiImageUrl";
import { LoadingHome } from "./components/LoadingHome";
import { sortItems } from "./constants/sortItems";
import { useHomeNetwork } from "./hooks/useHomeNetwork";

export function Home() {
  const { data, title, handleSearch, isLoading } = useHomeNetwork();

  return (
    <BaseLayout>
      <InputSearch onSearch={handleSearch} defaultValue={title} />

      <SortByItems items={sortItems} />

      {isLoading ? (
        <LoadingHome />
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
