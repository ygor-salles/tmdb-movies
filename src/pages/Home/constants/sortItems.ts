import { IItemSort } from "../../../components/base/SortByItems/types";

export const sortItems: Array<IItemSort> = [
  {
    label: "Data de lançamento mais atual",
    key: "release_date",
    value: "desc",
    sortingType: "date",
  },
  {
    label: "Popularidade",
    key: "popularity",
    value: "asc",
    sortingType: "default",
  },
  {
    label: "Classificação",
    key: "vote_average",
    value: "asc",
    sortingType: "default",
  },
];
