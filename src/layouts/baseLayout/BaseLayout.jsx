import { useContext } from "react";
import { MyNav } from "../../components/myNav/MyNav";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MyFooter } from "../../components/myFooter/MyFooter";
import "./BaseLayout.css";
export const BaseLayout = ({ children, handleInputChange, input }) => {
  const { computedTheme } = useContext(ThemeContext);
  return (
    <>
      <MyNav handleInputChange={handleInputChange} input={input} />
      <main className={`main ${computedTheme} main-container py-5`}>
        {children}
      </main>
      <MyFooter />
    </>
  );
};
