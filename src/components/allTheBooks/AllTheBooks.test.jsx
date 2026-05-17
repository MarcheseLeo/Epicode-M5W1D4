import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AllTheBooks } from "./AllTheBooks.jsx";
import { ThemeProvider } from "../../contexts/ThemeContext.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import fantasyBooks from "../../books/fantasy.json";

describe("Testing AllTheBooks component", () => {
  it("should show as many cards as there are in json", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <AllTheBooks title="fantasy" books={fantasyBooks} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const cards = screen.getAllByAltText("");

    expect(cards).toHaveLength(fantasyBooks.length);

    expect();
  });
});
