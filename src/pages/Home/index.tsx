import { InputSearch, MovieCard, Pagination } from "../../components/base";
import { SortByItems } from "../../components/base/SortByItems";
import { BaseLayout } from "../../components/layout";
import { LoadingHome } from "./components/LoadingHome";
import { sortItems } from "./constants/sortItems";
import { useHomeEvents } from "./hooks/useHomeEvents";
import { useHomeNetwork } from "./hooks/useHomeNetwork";

export function Home() {
  const { handleSearch, handlePageChange } = useHomeEvents();

  const { data, title, isLoading } = useHomeNetwork();

  return (
    <BaseLayout>
      <InputSearch onSearch={handleSearch} defaultValue={title} />

      <SortByItems items={sortItems} />
      <Pagination
        page={data?.page ?? 1}
        totalPages={data?.total_pages ?? 10}
        totalResults={data?.total_results ?? 100}
        onPageChange={handlePageChange}
      />

      {isLoading ? (
        <LoadingHome />
      ) : (
        <div className="flex gap-4 justify-center max-w-screen-2xl flex-wrap">
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
}
