import type { DataProps } from "../hook/useControlFetch";
import "../styles/DownMain.css";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const DownMain: React.FC<MainProps> = ({ current, location }) => {
  return (
    <section className="down_main">
      <div className="directions">
        <p>Latitud: {location.lat.toFixed(1)} </p>
        <p>Longitud: {location.lon.toFixed(1)}</p>
      </div>

      <div className="condition">
        <img
          src={current.condition.icon}
          className="condition_icon"
          alt="icon"
        />
        <p className="condition_text">{current.condition.text}</p>
        <p>Humedad: {current.humidity}</p>
      </div>

      <div className="wind">
        <p>Velocidad del viento: {current.wind_kph} km/h</p>

        <p>Dirección del viento: {current.wind_dir}</p>
      </div>
    </section>
  );
};
