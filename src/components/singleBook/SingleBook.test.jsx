import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { SingleBook } from "./SingleBook";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

const FakeBookDetails = () => <div>Sezione commenti</div>;

describe("Testing SingleBook COmponent", () => {
  it("should render comentArea, in a new page, on click", async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route
              path="/"
              element={
                <SingleBook
                  title="sono un libro"
                  img="https://image.com"
                  price="20"
                  category="fantasy"
                  asin="12345"
                />
              }
            />
            <Route path="/book-details/:asin" element={<FakeBookDetails />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    const btn = screen.getByText("More info");

    fireEvent.click(btn);

    const commentArea = await screen.findByText("Sezione commenti");
    expect(commentArea).toBeInTheDocument();
  });
});
