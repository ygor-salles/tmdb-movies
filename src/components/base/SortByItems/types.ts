export interface IItemSort {
  label: string;
  key: string;
  value: "asc" | "desc" | undefined;
}

export interface ISortByItemsProps {
  items: Array<IItemSort>;
}
