import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </div>
  );
}

export default App;
