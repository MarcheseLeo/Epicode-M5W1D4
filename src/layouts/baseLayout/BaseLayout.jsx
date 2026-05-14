import { Children } from "react";
import { MyNav } from "../../components/myNav/MyNav";
import { MyFooter } from "../../components/myFooter/MyFooter";
export const BaseLayout = ({ children, handleInputChange, input }) => {
  return (
    <>
      <MyNav handleInputChange={handleInputChange} input={input} />
      {children}
      <MyFooter />
    </>
  );
};
