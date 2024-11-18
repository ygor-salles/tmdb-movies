import { useSearchParams } from "react-router-dom";

export function useHomeEvents() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (value: string | undefined) => {
    if (value) {
      setSearchParams({ title: value, page: "1" });
      return;
    }

    searchParams.delete("title");
    setSearchParams(searchParams);
  };

  const handlePageChange = (page: number) => {
    if (page) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", `${page}`);
      setSearchParams(newParams);
    }
  };

  return { handleSearch, handlePageChange };
}
