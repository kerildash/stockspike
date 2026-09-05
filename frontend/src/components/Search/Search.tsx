import { type ChangeEvent, type FC, type KeyboardEvent } from 'react';
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;  
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  search: string;
  startSearch?: () => void;
  style?: "default" | "hero";
}

const Search: FC<SearchProps> = ({ onChange, onKeyDown, search, startSearch, style }: SearchProps) => {  
  const searchPageStyle = 
    <section className="max-w-3xl mx-auto ">
      <div className="relative">
        <input
          type='text'
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search companies..."
          className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border-1 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="mt-0.75 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </section>

  const heroVersion =
    <section className="flex flex-row items-center">
      <div className="relative flex-0 w-full ">
        <input
          type='text'
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search companies..."
          className="placeholder-gray-900 h-13 px-4 py-2 pl-14 text-gray-900 bg-white border-1 border-gray-900 rounded-l-3xl border-r-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-white duration-200"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="ml-3 w-5 h-5 text-gray-700" />
        </div>
      </div>
      <button
          className='flex-1 w-50 bg-gray-100 rounded-r-3xl h-13  hover:cursor-pointer border-1 border-r-0 hover:ring-2 hover:outline-none hover:ring-gray-900 hover:border-white'
          type='button'
          onClick={startSearch}
        >
          Search
        </button>
    </section>

  return (!style || style === "default")
    ? searchPageStyle 
    : heroVersion;  
};

export default Search;
