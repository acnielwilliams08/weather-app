import { useState } from "react";
import { SearchInpit } from "./components/SearchInpit";
import { useControlFetch } from "./hook/useControlFetch";

export const App = () => {
  const [region, setRegion] = useState("Cuba");

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  const { data, isLoading } = useControlFetch(region);

  return (
    <>
      <h1>Weather App</h1>

      <SearchInpit onAddRegion={onAddRegion}></SearchInpit>

      {isLoading && <h2>Cargando...</h2>}
    </>
  );
};
