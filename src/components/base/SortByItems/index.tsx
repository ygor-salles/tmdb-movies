import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ISortByItemsProps } from "./types";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "./utils/getSortParamsURL";

export function SortByItems({ items }: Readonly<ISortByItemsProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickSort = (key: string, value: "asc" | "desc") => {
    const result = getSortParamsUrl(searchParams, items);

    if (result) {
      setSearchParams({ [key]: result.value === "asc" ? "desc" : "asc" });
      return;
    }
    setSearchParams({ [key]: value });
  };

  return (
    <div className="max-w-7xl  flex gap-4 items-center">
      {items.map(({ label, key, value }) => {
        const valueParams = searchParams.get(key);
        console.log(valueParams);
        const isAsc = valueParams && valueParams === "asc";

        return (
          <div key={label} className="flex items-center gap-2">
            <span className="text-white">{label}</span>
            <button onClick={() => handleClickSort(key, value)}>
              {isAsc ? (
                <FaArrowDown size={24} className="text-white" />
              ) : (
                <FaArrowUp size={24} className="text-white" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
