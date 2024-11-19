import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IPaginationProps } from "./types";
import { Pagination } from ".";

describe("Pagination Component", () => {
  const defaultProps: IPaginationProps = {
    page: 1,
    totalPages: 5,
    onPageChange: vi.fn(),
  };

  it("should render the correct number of page buttons", () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should render left and right arrow buttons", () => {
    render(<Pagination {...defaultProps} />);

    const leftButton = screen.getByTestId("arrow-left-pagination-button");
    const rightButton = screen.getByTestId("arrow-right-pagination-button");
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });

  it("should disable the left button when page is 1", () => {
    render(<Pagination {...defaultProps} page={1} />);
    const leftButton = screen.getByTestId("arrow-left-pagination-button");
    expect(leftButton).toBeDisabled();
  });

  it("should disable the right button when page is equal to totalPages", () => {
    render(<Pagination {...defaultProps} page={5} totalPages={5} />);
    const rightButton = screen.getByTestId("arrow-right-pagination-button");
    expect(rightButton).toBeDisabled();
  });

  it("should call onPageChange with correct page when clicking the left button", () => {
    render(<Pagination {...defaultProps} page={2} />);

    const leftButton = screen.getByTestId("arrow-left-pagination-button");
    fireEvent.click(leftButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
  });

  it("should call onPageChange with correct page when clicking the right button", () => {
    render(<Pagination {...defaultProps} page={2} />);

    const rightButton = screen.getByTestId("arrow-right-pagination-button");
    fireEvent.click(rightButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledTimes(2);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });
});
