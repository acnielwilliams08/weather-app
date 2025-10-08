import type { DataProps } from "../hook/useControlFetch";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const TopMain: React.FC<MainProps> = ({ current, location }) => {
  return (
    <section>
      <h1>{current.temp_c}°C</h1>

      <h2> {location.name} </h2>

      <h3>{location.country}</h3>
    </section>
  );
};
