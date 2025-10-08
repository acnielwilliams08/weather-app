import type { DataProps } from "../hook/useControlFetch";

type CurrentData = DataProps["current"];
type LocationData = DataProps["location"];

interface MainProps {
  current: CurrentData;
  location: LocationData;
}

export const DownMain: React.FC<MainProps> = ({ current, location }) => {
  return <div>Main</div>;
};
