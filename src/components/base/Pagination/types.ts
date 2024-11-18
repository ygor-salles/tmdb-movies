export interface IPaginationProps {
  page: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}
