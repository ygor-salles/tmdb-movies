import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RenderPageNumbers } from "./RenderPagesNumber";
import { IPaginationProps } from "./types";

export function Pagination({
  page = 1,
  totalPages = 10,
  onPageChange,
}: Readonly<IPaginationProps>) {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button onClick={handlePrevious} disabled={page === 1}>
        <FaArrowLeft
          size={28}
          className={
            page === 1
              ? " text-gray-600 cursor-not-allowed"
              : " text-gray-200 hover:text-white"
          }
        />
      </button>

      <RenderPageNumbers
        handlePageChange={handlePageChange}
        page={page}
        totalPages={totalPages}
      />

      <button onClick={handleNext} disabled={page === totalPages}>
        <FaArrowRight
          size={28}
          className={
            page === totalPages
              ? " text-gray-600 cursor-not-allowed"
              : " text-gray-200 hover:text-white"
          }
        />
      </button>
    </div>
  );
}
