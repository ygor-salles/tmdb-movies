import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useGetTrailer } from "./hooks/useGetTrailer";
import { ModalDetails } from ".";

vi.mock("../../../Modal", () => ({
  Modal: vi.fn(({ children }) => <div data-testid="modal">{children}</div>),
}));
vi.mock("../../../Skeleton", () => ({
  Skeleton: vi.fn(() => <div data-testid="skeleton" />),
}));

vi.mock("./hooks/useGetTrailer");

describe("ModalDetails Component", () => {
  const mockMovie = {
    adult: false,
    backdrop_path: "/backdrop.jpg",
    genre_ids: [28, 12],
    id: 12345,
    original_language: "en",
    original_title: "Original Title",
    overview: "Test overview",
    popularity: 1234.56,
    poster_path: "/poster.jpg",
    release_date: "2023-11-01",
    title: "Test Movie",
    video: false,
    vote_average: 8.5,
    vote_count: 5000,
  };

  it("should show skeleton while loading trailer", () => {
    vi.mocked(useGetTrailer).mockReturnValue({
      trailerKey: null,
      isLoading: true,
    });

    render(
      <ModalDetails movie={mockMovie} onToggle={vi.fn()} openModal={true} />
    );

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("should show fallback message when trailer is not available", () => {
    vi.mocked(useGetTrailer).mockReturnValue({
      trailerKey: null,
      isLoading: false,
    });

    render(
      <ModalDetails movie={mockMovie} onToggle={vi.fn()} openModal={true} />
    );

    const fallback = screen.getByTestId("modal-detail-empty");
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent("Trailer não disponível");
  });

  it("should show fallback message when overview is not available", () => {
    const movieWithoutOverview = { ...mockMovie, overview: "" };

    vi.mocked(useGetTrailer).mockReturnValue({
      trailerKey: null,
      isLoading: false,
    });

    render(
      <ModalDetails
        movie={movieWithoutOverview}
        onToggle={vi.fn()}
        openModal={true}
      />
    );

    const overview = screen.getByTestId("modal-detail-sinopse");
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent("Nenhuma sinopse disponível");
  });
});
