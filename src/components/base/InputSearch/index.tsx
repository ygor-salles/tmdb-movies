import { FaSearch } from "react-icons/fa";

export function InputSearch() {
  return (
    <div className="relative max-w-5xl mx-auto items-center ">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-[600px] py-3 pl-10 pr-4 text-lg text-gray-800 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-500 transition-all duration-300 ease-in-out"
      />
      <div className="absolute left-0 top-1 flex items-center pl-4 pt-3">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
}
