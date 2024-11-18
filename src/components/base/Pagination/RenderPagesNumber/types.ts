export interface IRenderPagesNumberProps {
  pageState: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}
