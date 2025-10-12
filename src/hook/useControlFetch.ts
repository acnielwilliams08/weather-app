import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

export interface DataProps {
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
  const [data, setdata] = useState<DataProps | null>(null);

  useEffect(() => {
    if (!region || region.trim().length === 0) return;

    fetchApi(region)
      .then((data) => setdata(data))
      .finally(() => setisLoading(false));
  }, [region]);

  return {
    data,
    isLoading,
  };
};
