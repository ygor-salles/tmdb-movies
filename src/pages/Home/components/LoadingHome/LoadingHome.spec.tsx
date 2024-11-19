import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoadingHome } from ".";

vi.mock("../../../../components/base", () => ({
  Skeleton: vi.fn(() => <div data-testid="skeleton" />),
}));

describe("LoadingHome Component", () => {
  it("should render the loading-home wrapper", () => {
    render(<LoadingHome />);

    const wrapper = screen.getByTestId("loading-home-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(
      "flex gap-4 p-4 justify-center max-w-7xl flex-wrap"
    );
  });

  it("should render 12 Skeleton components", () => {
    render(<LoadingHome />);

    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons).toHaveLength(12);
  });
});
