import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

interface DataProps {
  current: {
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    is_day: number;
    temp_c: number;
    condition: {
      icon: string;
      text: string;
    };
  };
  location: {
    country: string;
    lat: number;
    lon: number;
    localtime: number;
    name: string;
  };
}

export const useControlFetch = (region: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState<DataProps>();

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
