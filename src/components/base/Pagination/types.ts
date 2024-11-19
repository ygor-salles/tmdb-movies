export interface IPaginationProps {
  page: number | undefined;
  totalPages: number | undefined;
  totalResults?: number | undefined;
  onPageChange: (page: number) => void;
}
