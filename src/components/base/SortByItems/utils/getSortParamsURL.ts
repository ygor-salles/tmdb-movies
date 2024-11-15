import { IItemSort } from "../types";

export function getSortParamsUrl(
  searchParams: URLSearchParams,
  sortItems: IItemSort[]
) {
  const sortOptions = sortItems.map((item) => item.key);

  for (const option of sortOptions) {
    if (searchParams.has(option)) {
      const value = searchParams.get(option) ?? "desc";
      return { option, value };
    }
  }

  return null;
}
