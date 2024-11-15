import { IItemSort } from "../../../components/base/SortByItems/types";

export const sortItems: Array<IItemSort> = [
  { label: "Data de lançamento", key: "release_date", value: "desc" },
  { label: "Popularidade", key: "popularity", value: "asc" },
  { label: "Classificação", key: "vote_average", value: "asc" },
];