import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ISortByItemsProps } from "./types";
import { useSearchParams } from "react-router-dom";
import { getSortParamsUrl } from "./utils/getSortParamsURL";
import { getNewValueSort } from "./utils/getNewValueSort";

export function SortByItems({ items }: Readonly<ISortByItemsProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickSort = (key: string, value: "asc" | "desc") => {
    const result = getSortParamsUrl(searchParams, items);

    if (result) {
      const newValue = getNewValueSort(key, result);
      setSearchParams({ [key]: newValue });
      return;
    }
    setSearchParams({ [key]: value });
  };

  return (
    <div
      className="max-w-7xl flex flex-col gap-4 items-center sm:flex-row"
      data-testid="sortby-items-wrapper"
    >
      {items.map(({ label, key, value, sortingType }) => {
        const valueParams = searchParams.get(key);
        const isDesc = valueParams && valueParams === "desc";

        return (
          <div key={label} className="flex items-center gap-2">
            <span className="text-white" data-testid="sortby-items-label">
              {sortingType === "date" ? label : `Top ${label}`}
            </span>
            <button
              onClick={() => handleClickSort(key, value)}
              data-testid="sortby-items-button"
            >
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
