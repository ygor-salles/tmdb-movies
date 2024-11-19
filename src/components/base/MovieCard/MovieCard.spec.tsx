import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieCard } from ".";

vi.mock("./components/ModalDetails", () => ({
  ModalDetails: vi.fn(() => <div data-testid="modal-details-mock" />),
}));

describe("MovieCard Component", () => {
  const mockMovie = {
    adult: false,
    backdrop_path: "/backdrop.jpg",
    genre_ids: [28, 12],
    id: 12345,
    original_language: "en",
    original_title: "Original Title",
    overview: "Movie overview",
    popularity: 1234.56,
    poster_path: "/poster.jpg",
    release_date: "2023-11-01",
    title: "Test Movie",
    video: false,
    vote_average: 8.5,
    vote_count: 5000,
  };

  it("should render the movie card with correct data", () => {
    render(<MovieCard movie={mockMovie} />);

    const title = screen.getByTestId("movie-card-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test Movie");

    const releaseDate = screen.getByTestId("movie-card-release");
    expect(releaseDate).toBeInTheDocument();
    expect(releaseDate).toHaveTextContent("Lançamento: 01/11/2023");

    const classification = screen.getByTestId("movie-card-class");
    expect(classification).toBeInTheDocument();
    expect(classification).toHaveTextContent("Classificação: Livre");
  });

  it("should toggle modal when card is clicked", () => {
    render(<MovieCard movie={mockMovie} />);

    const card = screen.getByTestId("movie-card-wrapper");
    fireEvent.click(card);

    const modal = screen.getByTestId("modal-details-mock");
    expect(modal).toBeInTheDocument();
  });

  it("should render adult classification when movie is for adults", () => {
    const adultMovie = { ...mockMovie, adult: true };
    render(<MovieCard movie={adultMovie} />);

    const classification = screen.getByTestId("movie-card-class");
    expect(classification).toHaveTextContent("Classificação: Adulto");
  });
});
