import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

export const useControlFetch = (region: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState({});

  useEffect(() => {
    if (region.length <= 0) return;

    fetchApi(region).then((data) => setdata(data));

    setisLoading(false);
  }, [region]);

  return {
    data,
    isLoading,
  };
};
