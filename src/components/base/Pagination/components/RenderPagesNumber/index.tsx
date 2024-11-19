import { IRenderPagesNumberProps } from "./types";

export function RenderPageNumbers({
  page,
  totalPages,
  handlePageChange,
}: IRenderPagesNumberProps) {
  const pagesToShow = 5;
  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  ).map((pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => handlePageChange(pageNumber)}
      className={`px-3 py-1 mx-1 rounded ${
        pageNumber === page
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-blue-100"
      }`}
    >
      {pageNumber}
    </button>
  ));
}
