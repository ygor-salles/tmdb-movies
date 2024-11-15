import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ISortByItemsProps } from "./types";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "./utils/getSortParamsURL";

export function SortByItems({ items }: Readonly<ISortByItemsProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickSort = (key: string, value: "asc" | "desc") => {
    const result = getSortParamsUrl(searchParams, items);

    if (result) {
      const changed = result.value === "asc" ? "desc" : "asc";
      const newValue =
        result.option === key ||
        (result.option !== key && result.value === "asc")
          ? changed
          : result.value;

      setSearchParams({ [key]: newValue });
      return;
    }
    setSearchParams({ [key]: value });
  };

  return (
    <div className="max-w-7xl  flex gap-4 items-center">
      {items.map(({ label, key, value, sortingType }) => {
        const valueParams = searchParams.get(key);
        const isDesc = valueParams && valueParams === "desc";

        return (
          <div key={label} className="flex items-center gap-2">
            <span className="text-white">
              {sortingType === "date" ? label : `Top ${label}`}
            </span>
            <button onClick={() => handleClickSort(key, value)}>
              {isDesc ? (
                <FaArrowUp size={24} className="text-white" />
              ) : (
                <FaArrowDown size={24} className="text-white" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
