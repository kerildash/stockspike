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
          className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border-1 border-gray-200 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </section>

  const heroVersion =
    <section className="w-full min-w-0">
      <div className="flex w-full min-w-0 items-stretch overflow-hidden bg-white border-1 border-gray-600 rounded-3xl focus:border-black">
        <div className="relative flex-1 min-w-0">
          <input
            type='text'
            value={search}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Search companies..."
            className="w-full h-13 px-4 pl-10 placeholder-gray-600 text-gray-900 bg-transparent border-0 focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <IoSearch className="w-4 h-4 text-gray-600" />
          </div>
        </div>
        <button
            className='shrink-0 px-10 bg-gray-300 border-l-1 border-l-gray-600 hover:bg-gray-200 focus:outline-none text-gray-800 font-medium cursor-pointer transition-colors duration-200'
            type='button'
            onClick={startSearch}
          >
            Search
          </button>
      </div>
    </section>

  return (!style || style === "default")
    ? searchPageStyle 
    : heroVersion;  
};

export default Search;
