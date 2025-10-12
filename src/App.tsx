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

      {!region ? (
        <h2>Ingrese una región para comenzar</h2>
      ) : isLoading ? (
        <h2>Cargando...</h2>
      ) : !data ? (
        <h2 className="herror_message">Búsqueda inválida, intente de nuevo</h2>
      ) : (
        <main>
          <TopMain {...data} />
          <DownMain {...data} />
        </main>
      )}
    </>
  );
};
