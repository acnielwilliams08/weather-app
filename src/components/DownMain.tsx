import type { DataProps } from "../hook/useControlFetch";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const DownMain: React.FC<MainProps> = ({ current, location }) => {
  return (
    <section>
      <div className="directions">
        <p>Latitud: {location.lat} </p>
        <p>Longitud: {location.lon}</p>
      </div>

      <div className="condition">
        <p>{current.condition.text}</p>
        <p>Humedad: {current.humidity}</p>
      </div>

      <div className="wind">
        <p>Velocidad del viento: {current.wind_kph} km/h</p>

        <p>Dirección del viento: {current.wind_dir}</p>
      </div>
    </section>
  );
};
