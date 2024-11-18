import { useState } from "react";
import { IPaginationProps } from "./types";
import { RenderPageNumbers } from "./RenderPagesNumber";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: Readonly<IPaginationProps>) {
  const [pageState, setPageState] = useState(page);

  const handlePageChange = (newPage: number) => {
    setPageState(newPage);
    onPageChange(newPage);
  };

  const handlePrevious = () => {
    if (pageState > 1) {
      handlePageChange(pageState - 1);
    }
  };

  const handleNext = () => {
    if (pageState < totalPages) {
      handlePageChange(pageState + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button onClick={handlePrevious} disabled={pageState === 1}>
        <FaArrowLeft
          size={28}
          className={
            pageState === 1
              ? " text-gray-600 cursor-not-allowed"
              : " text-gray-200 hover:text-white"
          }
        />
      </button>

      <RenderPageNumbers
        handlePageChange={handlePageChange}
        pageState={pageState}
        totalPages={totalPages}
      />

      <button onClick={handleNext} disabled={pageState === totalPages}>
        <FaArrowRight
          size={28}
          className={
            pageState === totalPages
              ? " text-gray-600 cursor-not-allowed"
              : " text-gray-200 hover:text-white"
          }
        />
      </button>
    </div>
  );
}
