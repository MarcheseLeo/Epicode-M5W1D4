import { ThemeProvider } from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Homepage } from "./pages/Homepages";
import { NotFound } from "./pages/NotFound";
import { BookDetails } from "./pages/BookDetails";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotta Index */}
          <Route index path="/" element={<Homepage />} />

          <Route path="/book-details/:asin" element={<BookDetails />} />

          {/* Ultima rotta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
