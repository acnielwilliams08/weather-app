import { useEffect, useState } from "react";
import { SearchInpit } from "./Components/SearchInpit";
import { fetchApi } from "./helpers/fetchApi";

export const App = () => {
  const [region, setRegion] = useState("Cuba");
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState({});

  const onAddRegion = (region: string) => {
    setRegion(region);
  };

  useEffect(() => {
    if (region.length <= 0) return;

    fetchApi(region).then((data) => setdata(data));

    setisLoading(false);
  }, [region]);

  console.log(data);

  return (
    <>
      <h1>Weather App</h1>

      <SearchInpit onAddRegion={onAddRegion}></SearchInpit>

      {isLoading && <h2>Cargando...</h2>}
    </>
  );
};
