import { useState } from "react";
import { SearchInpit, TopMain, DownMain } from "./components/";
import { useControlFetch } from "./hook/useControlFetch";

export const App = () => {
  const [region, setRegion] = useState("Cuba");

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  const { data, isLoading } = useControlFetch(region);

  if (!data) return;

  return (
    <>
      <header>
        <SearchInpit onAddRegion={onAddRegion}></SearchInpit>
      </header>

      <main>
        <TopMain {...data}></TopMain>
        <DownMain {...data}></DownMain>
      </main>

      {isLoading && <h2>Cargando...</h2>}
    </>
  );
};
