import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IModalProps } from "./types";
import { Modal } from ".";

describe("Modal Component", () => {
  const defaultProps: IModalProps = {
    toggleModal: vi.fn(),
    open: true,
    title: "Test Modal Title",
    children: <div data-testid="modal-children">Modal Content</div>,
  };

  it("should render the modal when open is true", () => {
    render(<Modal {...defaultProps} />);
    const modalWrapper = screen.getByTestId("modal-wrapper");
    expect(modalWrapper).toBeInTheDocument();
  });

  it("should not render the modal when open is false", () => {
    render(<Modal {...defaultProps} open={false} />);
    const modalWrapper = screen.queryByTestId("modal-wrapper");
    expect(modalWrapper).not.toBeInTheDocument();
  });

  it("should display the correct title", () => {
    render(<Modal {...defaultProps} />);
    const modalTitle = screen.getByTestId("modal-title");
    expect(modalTitle).toBeInTheDocument();
    expect(modalTitle).toHaveTextContent("Test Modal Title");
  });

  it("should call toggleModal when close button is clicked", () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByTestId("modal-button-close");
    fireEvent.click(closeButton);
    expect(defaultProps.toggleModal).toHaveBeenCalledTimes(1);
  });

  it("should render children passed as props", () => {
    render(<Modal {...defaultProps} />);
    const modalChildren = screen.getByTestId("modal-children");
    expect(modalChildren).toBeInTheDocument();
    expect(modalChildren).toHaveTextContent("Modal Content");
  });
});
