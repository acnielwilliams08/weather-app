import { useState } from "react";
import { SearchInpit } from "./Components/SearchInpit";

export const App = () => {
  const [region, setRegion] = useState("");

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  return (
    <>
      <h1>Weather App</h1>

      <SearchInpit onAddRegion={onAddRegion}></SearchInpit>
    </>
  );
};
