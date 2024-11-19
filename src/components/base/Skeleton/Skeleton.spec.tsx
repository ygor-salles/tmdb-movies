import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from ".";

describe("Skeleton Component", () => {
  it("should render with default height and width", () => {
    render(<Skeleton />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveStyle({
      height: "400px",
      width: "288px",
    });
  });

  it("should render with custom height and width", () => {
    render(<Skeleton height="500px" width="300px" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveStyle({
      height: "500px",
      width: "300px",
    });
  });
});
