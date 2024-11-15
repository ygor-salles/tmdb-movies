import { FormEvent, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IInputSearchProps } from "./types";

export function InputSearch({
  onSearch,
  defaultValue,
}: Readonly<IInputSearchProps>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputRef.current?.value;
    onSearch(value);
  };

  return (
    <div className="relative max-w-5xl mx-auto items-center ">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          defaultValue={defaultValue ?? undefined}
          ref={inputRef}
          placeholder="Buscar..."
          className="w-[600px] py-3 px-4 text-lg text-gray-800 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-500 transition-all duration-300 ease-in-out"
        />
        <button
          className="absolute right-4 top-[25%] flex items-center justify-center"
          type="submit"
        >
          <CiSearch className="text-gray-500" size={26} />
        </button>
      </form>
    </div>
  );
}
