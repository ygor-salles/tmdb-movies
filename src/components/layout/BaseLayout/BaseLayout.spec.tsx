import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BaseLayout } from ".";

vi.mock("../../../assets/images", () => ({
  IMAGES: {
    logoTmdb: "/path/to/logo-tmdb.png",
    tech4: "/path/to/logo-tech4.png",
  },
}));

describe("BaseLayout Component", () => {
  it("should render the layout wrapper", () => {
    render(<BaseLayout>Test Content</BaseLayout>);

    const wrapper = screen.getByTestId("base-layout-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("h-screen flex flex-col overflow-x-hidden");
  });

  it("should render the header with correct elements", () => {
    render(<BaseLayout>Test Content</BaseLayout>);

    const header = screen.getByTestId("base-layout-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass(
      "flex justify-between items-center  bg-zinc-900 py-4 px-4 sm:px-8"
    );

    const tmdbLogo = screen.getByAltText("tmdb-logo");
    expect(tmdbLogo).toBeInTheDocument();
    expect(tmdbLogo).toHaveAttribute("src", "/path/to/logo-tmdb.png");

    const tech4Logo = screen.getByAltText("tech4Humans-logo");
    expect(tech4Logo).toBeInTheDocument();
    expect(tech4Logo).toHaveAttribute("src", "/path/to/logo-tech4.png");

    const headerText = screen.getByText("Buscador de filmes");
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveClass("text-white");
  });

  it("should render the main section with children", () => {
    render(
      <BaseLayout>
        <div>Child Content</div>
      </BaseLayout>
    );

    const main = screen.getByTestId("base-layout-main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass(
      "flex flex-col flex-1 items-center bg-gradient-to-r py-5 from-zinc-800 to-zinc-900 via-blue-900 gap-4 sm:gap-8"
    );

    const childContent = screen.getByText("Child Content");
    expect(childContent).toBeInTheDocument();
  });

  it("should render the footer with correct elements", () => {
    render(<BaseLayout>Test Content</BaseLayout>);

    const footer = screen.getByTestId("base-layout-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass(
      "flex flex-col gap-2 justify-center items-center  bg-blue-950 p-4 sm:p-8"
    );

    const footerText1 = screen.getByText("Desenvolvido por Ygor Salles");
    expect(footerText1).toBeInTheDocument();
    expect(footerText1).toHaveClass("text-white");

    const footerText2 = screen.getByText("Tech 4 Humans");
    expect(footerText2).toBeInTheDocument();
    expect(footerText2).toHaveClass("text-white");
  });
});
