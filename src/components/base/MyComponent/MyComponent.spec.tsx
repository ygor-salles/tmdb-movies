import { render, screen } from "@testing-library/react";
import MyComponent from "./index";

describe("MyComponent", () => {
  test("renders Hello, world!", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello, world!"));
  });
});
