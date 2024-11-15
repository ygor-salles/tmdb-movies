export interface IItemSort {
  label: string;
  key: string;
  value: "asc" | "desc";
}

export interface ISortByItemsProps {
  items: Array<IItemSort>;
}
