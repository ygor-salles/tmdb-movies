import { render, screen } from "@testing-library/react";
import { Pagination } from ".";

describe("Pagination Component", () => {
  it("should render the correct number of page buttons", () => {
    render(
      <Pagination
        page={1}
        totalPages={5}
        totalResults={50}
        onPageChange={() => {}}
      />
    );

    // Verifica se o botão da página atual está renderizado
    expect(screen.getByText("1")).toBeInTheDocument();

    // Verifica se o total de páginas aparece corretamente
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
