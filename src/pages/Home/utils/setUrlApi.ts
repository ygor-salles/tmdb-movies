import { IItemSort } from "../../../components/base/SortByItems/types";
import { getSortParamsUrl } from "../../../components/base/SortByItems/utils/getSortParamsURL";
import { API_FILTER_MOVIES, API_GET_MOVIES } from "../../../constants";

interface ISetUrlApiProps {
  searchParams: URLSearchParams;
  sortItems: IItemSort[];
  page: string;
}

export const setUrlApi = ({
  page,
  searchParams,
  sortItems,
}: ISetUrlApiProps) => {
  const title = searchParams.get("title");

  const result = getSortParamsUrl(searchParams, sortItems);
  const sort_by = result
    ? `${result.option}.${result.value}`
    : "release_date.desc";

  const url = title
    ? `${API_FILTER_MOVIES}&query=${title}&page=${page}`
    : `${API_GET_MOVIES}&sort_by=${sort_by}&page=${page}`;

  return url;
};
