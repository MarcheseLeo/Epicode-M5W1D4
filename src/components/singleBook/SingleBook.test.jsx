import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { SingleBook } from "./SingleBook";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { CommentArea } from "../commentArea/CommentArea";
import { useParams } from "react-router-dom";

const FakeBookDetails = () => <div>Sezione commenti</div>;

const FakeBookDetailsPage = () => {
  const { asin } = useParams();
  return (
    <div>
      <h1>Pagina Dettagli</h1>
      <CommentArea asin={asin} />
    </div>
  );
};

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

  it('should show comments after clicking on a book', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([

          { _id: "1", comment: "Libro stupendo!", rate: 5 },
          { _id: "2", comment: "Non mi è piaciuto", rate: 2 }
        ]),
      })
    );
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
                  asin="0062678108"
                />
              }
            />
            <Route path="/book-details/:asin" element={<FakeBookDetailsPage />}/>
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    )

    const btn = screen.getByText("More info");

    fireEvent.click(btn);

    const comments = await screen.findAllByTestId("single-comment");

    expect(comments).toHaveLength(2); 

    vi.restoreAllMocks();
  })
});
