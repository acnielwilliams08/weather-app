import { useRef, type FormEvent } from "react";

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
    <form onSubmit={onSumbitInput}>
      <input type="text" ref={inputRef} />
      <button>Buscar</button>
    </form>
  );
};
