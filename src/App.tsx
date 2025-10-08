import { useState } from "react";
import { SearchInpit } from "./components/SearchInpit";
import { useControlFetch } from "./hook/useControlFetch";
import { TopMain } from "./components/TopMain";
import { DownMain } from "./components/DownMain";

export const App = () => {
  const [region, setRegion] = useState("Cuba");

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  const { data, isLoading } = useControlFetch(region);
  if (!data) return;
  const { current, location } = data;

  return (
    <>
      <header>
        <SearchInpit onAddRegion={onAddRegion}></SearchInpit>
      </header>

      <main>
        <TopMain current={current} location={location}></TopMain>
        <DownMain current={current} location={location}></DownMain>
      </main>

      {isLoading && <h2>Cargando...</h2>}
    </>
  );
};
