export interface IRenderPagesNumberProps {
  page: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}
