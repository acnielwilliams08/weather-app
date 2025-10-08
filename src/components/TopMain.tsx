import type { DataProps } from "../hook/useControlFetch";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const TopMain: React.FC<MainProps> = ({ current, location }) => {
  console.log(current.humidity, location.lat);

  return <div>Header</div>;
};
