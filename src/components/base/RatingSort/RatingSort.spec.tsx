import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RatingCircle } from ".";

describe("RatingCircle Component", () => {
  it("should render the rating value correctly", () => {
    render(<RatingCircle rating={7.5} />);

    const ratingValue = screen.getByTestId("rating-sort-rating");
    expect(ratingValue).toBeInTheDocument();
    expect(ratingValue).toHaveTextContent("7.5");
  });

  it("should calculate strokeDashoffset correctly for a given rating", () => {
    const rating = 7.5;
    const circleRadius = 36;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const percentage = (rating / 10) * 100;
    const expectedStrokeDashoffset =
      circleCircumference - (percentage / 100) * circleCircumference;

    render(<RatingCircle rating={rating} />);

    const circle = screen
      .getByTestId("rating-sort-circle")
      .querySelector("circle:nth-child(2)");
    expect(circle).toHaveAttribute(
      "stroke-dashoffset",
      expectedStrokeDashoffset.toString()
    );
  });

  it("should apply the correct color for ratings <= 4 (red)", () => {
    render(<RatingCircle rating={3.5} />);

    const circle = screen
      .getByTestId("rating-sort-circle")
      .querySelector("circle:nth-child(2)");
    expect(circle).toHaveClass("text-red-500");
  });

  it("should apply the correct color for ratings <= 7 (yellow)", () => {
    render(<RatingCircle rating={6.5} />);

    const circle = screen
      .getByTestId("rating-sort-circle")
      .querySelector("circle:nth-child(2)");
    expect(circle).toHaveClass("text-yellow-500");
  });

  it("should apply the correct color for ratings > 7 (green)", () => {
    render(<RatingCircle rating={8.5} />);

    const circle = screen
      .getByTestId("rating-sort-circle")
      .querySelector("circle:nth-child(2)");
    expect(circle).toHaveClass("text-green-500");
  });

  it("should render the SVG correctly", () => {
    render(<RatingCircle rating={8.5} />);

    const svg = screen.getByTestId("rating-sort-circle").querySelector("svg");
    expect(svg).toBeInTheDocument();

    const circles = svg?.querySelectorAll("circle");
    expect(circles?.length).toBe(2);
  });
});
