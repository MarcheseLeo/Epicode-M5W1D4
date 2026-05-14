import { MyMain } from "../components/myMain/MyMain";

import { useState } from "react";
import { BaseLayout } from "../layouts/baseLayout/BaseLayout";

export const Homepage = () => {
  const [input, setInput] = useState("");

  const clearInput = () => {
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <BaseLayout handleInputChange={handleInputChange} input={input}>
      <MyMain input={input} clearInput={clearInput} />
    </BaseLayout>
  );
};
