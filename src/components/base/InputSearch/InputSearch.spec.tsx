import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { InputSearch } from ".";

const onSearchMock = vi.fn();

describe("InputSearch Component", () => {
  beforeEach(() => {
    onSearchMock.mockClear();
  });

  it("renders the input field and search button", () => {
    render(<InputSearch onSearch={onSearchMock} defaultValue="test" />);

    const input = screen.getByTestId("search-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");

    const button = screen.getByTestId("search-button");
    expect(button).toBeInTheDocument();
  });

  it("calls the onSearch callback with the correct value on form submit", () => {
    render(
      <InputSearch onSearch={onSearchMock} defaultValue="initial value" />
    );

    const input = screen.getByTestId("search-input");
    const form = screen.getByTestId("search-form");

    fireEvent.change(input, { target: { value: "new value" } });
    fireEvent.submit(form);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith("new value");
  });

  it("calls onSearch with undefined if input is empty and form is submitted", async () => {
    render(<InputSearch onSearch={onSearchMock} defaultValue="test" />);

    const input = screen.getByTestId("search-input");
    const form = screen.getByTestId("search-form");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(form);

    await waitFor(() => expect(onSearchMock).toHaveBeenCalledWith(""));
  });

  it("calls onSearch with correct value after input change", () => {
    render(<InputSearch onSearch={onSearchMock} defaultValue="initial" />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(input).toHaveValue("new value");

    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);
    expect(onSearchMock).toHaveBeenCalledWith("new value");
  });

  it("submits the form correctly when a search button is clicked", () => {
    render(<InputSearch onSearch={onSearchMock} defaultValue="test" />);

    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: "new search term" } });
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith("new search term");
  });
});
