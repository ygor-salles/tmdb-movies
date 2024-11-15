import { IItemSort } from "../../../components/base/SortByItems/types";
import { getSortParamsUrl } from "../../../components/base/SortByItems/utils/getSortParamsURL";
import { API_FILTER_MOVIES, API_GET_MOVIES } from "../../../constants";

export const setUrlApi = (
  searchParams: URLSearchParams,
  sortItems: IItemSort[]
) => {
  const title = searchParams.get("title");

  const result = getSortParamsUrl(searchParams, sortItems);
  const sort_by = result
    ? `${result.option}.${result.value}`
    : "release_date.desc";

  const url = title
    ? `${API_FILTER_MOVIES}&query=${title}&page=1`
    : `${API_GET_MOVIES}&sort_by=${sort_by}&page=1`;

  return url;
};
