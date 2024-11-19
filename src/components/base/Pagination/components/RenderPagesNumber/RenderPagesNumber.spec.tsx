import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RenderPageNumbers } from ".";

describe("RenderPageNumbers Component", () => {
  const mockHandlePageChange = vi.fn();

  it("should render the correct number of pages", () => {
    render(
      <RenderPageNumbers
        page={3}
        totalPages={10}
        handlePageChange={mockHandlePageChange}
      />
    );

    const buttons = screen.getAllByTestId("render-page-number-button");
    expect(buttons).toHaveLength(5);
    expect(buttons[0]).toHaveTextContent("1");
    expect(buttons[4]).toHaveTextContent("5");
  });

  it("should apply active style to the current page", () => {
    render(
      <RenderPageNumbers
        page={3}
        totalPages={10}
        handlePageChange={mockHandlePageChange}
      />
    );

    const activeButton = screen.getByText("3");
    expect(activeButton).toHaveClass("bg-blue-500 text-white");
  });

  it("should call handlePageChange with correct page number when clicked", () => {
    render(
      <RenderPageNumbers
        page={3}
        totalPages={10}
        handlePageChange={mockHandlePageChange}
      />
    );

    const button = screen.getByText("4");
    fireEvent.click(button);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(4);
  });

  it("should render the correct range of pages for edge cases", () => {
    render(
      <RenderPageNumbers
        page={1}
        totalPages={3}
        handlePageChange={mockHandlePageChange}
      />
    );

    const buttons = screen.getAllByTestId("render-page-number-button");
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent("1");
    expect(buttons[2]).toHaveTextContent("3");
  });

  it("should render limited pages based on totalPages and pagesToShow", () => {
    render(
      <RenderPageNumbers
        page={6}
        totalPages={10}
        handlePageChange={mockHandlePageChange}
      />
    );

    const buttons = screen.getAllByTestId("render-page-number-button");
    expect(buttons).toHaveLength(5);
    expect(buttons[0]).toHaveTextContent("4");
    expect(buttons[4]).toHaveTextContent("8");
  });
});
