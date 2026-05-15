import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome.jsx";
import { expect, it } from "vitest";

describe("Testing Welcome component", () => {
  it("should render properly", () => {
    render(<Welcome />);

    const test = screen.getByText("Welcome to Epicode-M5W1D4 exercise");
    expect(test).toBeInTheDocument();
  });
});
