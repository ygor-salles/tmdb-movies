import { InputSearch, MovieCard } from "../../components/base";
import { SortByItems } from "../../components/base/SortByItems";
import { BaseLayout } from "../../components/layout";
import { LoadingHome } from "./components/LoadingHome";
import { sortItems } from "./constants/sortItems";
import { useHomeNetwork } from "./hooks/useHomeNetwork";

export function Home() {
  const { data, searchParams, setSearchParams, isLoading } = useHomeNetwork();

  const handleSearch = (value: string | undefined) => {
    if (value) {
      setSearchParams({ title: value, page: "1" });
      return;
    }

    searchParams.delete("title");
    setSearchParams(searchParams);
  };

  const title = searchParams.get("title");

  return (
    <BaseLayout>
      <InputSearch onSearch={handleSearch} defaultValue={title} />

      <SortByItems items={sortItems} />

      {isLoading ? (
        <LoadingHome />
      ) : (
        <div className="flex gap-4 justify-center max-w-screen-2xl flex-wrap">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
}
