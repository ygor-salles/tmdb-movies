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
    console.log(page);
    if (page) {
      const newParams = new URLSearchParams(searchParams); // Cria uma cópia dos parâmetros
      newParams.set("page", `${page}`); // Define o novo valor para "page"
      setSearchParams(newParams); // Atualiza os parâmetros na URL
    }
  };

  return { handleSearch, handlePageChange };
}
