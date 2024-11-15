import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IItemSort, ISortByItemsProps } from "./types";
import { useSearchParams } from "react-router-dom";

export function SortByItems({ items }: Readonly<ISortByItemsProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickSort = (key: string, value: IItemSort["value"]) => {
    const newValue: "asc" | "desc" = value && value === "asc" ? "desc" : "asc";

    console.log("params", { [key]: newValue });
    setSearchParams({ [key]: newValue });
  };

  return (
    <div className="max-w-7xl  flex gap-4 items-center">
      {items.map(({ label, key, value }) => {
        const valueParams = searchParams.get(key);
        const isAsc = valueParams && valueParams === "asc";

        return (
          <div key={label} className="flex items-center gap-2">
            <span className="text-white">{label}</span>
            <button onClick={() => handleClickSort(key, value)}>
              {isAsc ? (
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
