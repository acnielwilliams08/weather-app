import type { DataProps } from "../hook/useControlFetch";
import "../styles/TopMain.css";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const TopMain: React.FC<MainProps> = ({ current, location }) => {
  return (
    <section className="top_main">
      <h1 className="degrees">{current.temp_c.toFixed(1)}°C</h1>

      <div className="container_region">
        <h2> {location.name} </h2>

        <h3>{location.country}</h3>
      </div>
    </section>
  );
};
