import { useState } from "react";
import { SearchInpit, TopMain, DownMain } from "./components/";
import { useControlFetch } from "./hook/useControlFetch";

export const App = () => {
  const [region, setRegion] = useState("Cuba");

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  const { data, isLoading } = useControlFetch(region);

  return (
    <>
      <header>
        <SearchInpit onAddRegion={onAddRegion}></SearchInpit>
      </header>

      {isLoading && <h2>Cargando...</h2>}

      {!data ? (
        <h2 className="herror_message">Busqueda inválida, intente denuevo</h2>
      ) : (
        <main>
          <TopMain {...data}></TopMain>
          <DownMain {...data}></DownMain>
        </main>
      )}
    </>
  );
};
