import { ThemeProvider } from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Homepage } from "./pages/Homepages";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotta Index */}
          <Route index path="/" element={<Homepage />} />

          {/* Ultima rotta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
