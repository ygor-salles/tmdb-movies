export interface IItemSort {
  label: string;
  key: string;
  value: "asc" | "desc";
  sortingType: "date" | "default";
}

export interface ISortByItemsProps {
  items: Array<IItemSort>;
}
