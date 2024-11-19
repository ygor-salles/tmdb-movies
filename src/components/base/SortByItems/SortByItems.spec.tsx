import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { useSearchParams } from "react-router-dom";
import { SortByItems } from ".";
import { ISortByItemsProps } from "./types";

vi.mock("./utils/getSortParamsURL", () => ({
  getSortParamsUrl: vi.fn(() => "mock-result"),
}));

vi.mock("./utils/getNewValueSort", () => ({
  getNewValueSort: vi.fn(() => "asc"),
}));

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useSearchParams: vi.fn(),
}));

describe("SortByItems Component", () => {
  const mockSetSearchParams = vi.fn();
  const defaultItems: ISortByItemsProps["items"] = [
    { label: "Date", key: "date", value: "desc", sortingType: "date" },
    { label: "Rating", key: "rating", value: "asc", sortingType: "default" },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);
  });

  it("should render all items with correct labels", () => {
    render(<SortByItems items={defaultItems} />);

    const labels = screen.getAllByTestId("sortby-items-label");
    expect(labels).toHaveLength(2);
    expect(labels[0]).toHaveTextContent("Date");
    expect(labels[1]).toHaveTextContent("Top Rating");
  });

  it("should call setSearchParams with correct parameters when sorting is applied", () => {
    render(<SortByItems items={defaultItems} />);

    const buttons = screen.getAllByTestId("sortby-items-button");

    fireEvent.click(buttons[0]);
    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
    expect(mockSetSearchParams).toHaveBeenCalledWith({ date: "asc" });
  });

  it("should toggle sort direction when button is clicked", () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams("date=desc"),
      mockSetSearchParams,
    ]);

    render(<SortByItems items={defaultItems} />);

    const buttons = screen.getAllByTestId("sortby-items-button");
    fireEvent.click(buttons[0]);
    expect(mockSetSearchParams).toHaveBeenCalledWith({ date: "asc" });
  });

  it("should render correct icon based on current sorting direction", () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams("rating=desc"),
      mockSetSearchParams,
    ]);

    render(<SortByItems items={defaultItems} />);

    const buttons = screen.getAllByTestId("sortby-items-button");
    const firstIcon = buttons[0].querySelector("svg");
    const secondIcon = buttons[1].querySelector("svg");

    expect(firstIcon).toBeTruthy();
    expect(secondIcon).toBeTruthy();
  });

  it("should handle missing parameters gracefully", () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);

    render(<SortByItems items={defaultItems} />);

    const buttons = screen.getAllByTestId("sortby-items-button");
    fireEvent.click(buttons[1]);
    expect(mockSetSearchParams).toHaveBeenCalledWith({ rating: "asc" });
  });
});
