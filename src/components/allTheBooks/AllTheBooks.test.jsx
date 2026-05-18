import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AllTheBooks } from "./AllTheBooks.jsx";
import { ThemeProvider } from "../../contexts/ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fantasyBooks from "../../books/fantasy.json";
import { fireEvent } from "@testing-library/react";

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

  it('should change selected class on toggle', () => {
    const books = [
      { asin: '000', title: 'A'}, 
      { asin: '001', title: 'B'}]
    render(
      <ThemeProvider>
        <BrowserRouter>
          <AllTheBooks title="fantasy" books={books} />
        </BrowserRouter>
      </ThemeProvider>,
    )

    const cardsImg = screen.getAllByAltText('')
    expect(cardsImg.length).toBeGreaterThan(0)

    const firstCard = cardsImg[0].parentElement
    const secondCard = cardsImg[1].parentElement
    
    expect(firstCard).not.toHaveClass('selected')
    expect(secondCard).not.toHaveClass('selected')

    fireEvent.click(firstCard)

    expect(firstCard).toHaveClass('selected')
    expect(secondCard).not.toHaveClass('selected')
    
    fireEvent.click(secondCard)

    expect(firstCard).not.toHaveClass('selected')
    expect(secondCard).toHaveClass('selected')

    fireEvent.click(secondCard)

    expect(firstCard).not.toHaveClass('selected')
    expect(secondCard).not.toHaveClass('selected')
  })
});
