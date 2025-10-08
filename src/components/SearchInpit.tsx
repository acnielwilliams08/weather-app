import { useRef, type FormEvent } from "react";
import "../styles/SearchInpit.css";
import icon from "../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

interface SearchInpitProps {
  onAddRegion: (region: string) => void;
}

export const SearchInpit: React.FC<SearchInpitProps> = ({ onAddRegion }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSumbitInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    const inputValue = inputRef.current.value.trim();

    onAddRegion(inputValue);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSumbitInput} className="input_form">
      <input type="text" ref={inputRef} className="input" />
      <button className="input_button">
        <img src={icon} alt="Search" />
      </button>
    </form>
  );
};
