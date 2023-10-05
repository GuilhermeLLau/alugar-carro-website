'use client';

import { useContext } from 'react';
import { SearchContext } from '../context/search';
import LocationSelection from './LocationSelection';
import HoursSelection from './HoursSelection';
import DateSelection from './DateSelection';

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? 'bg-white rounded-none xl:h-[80px]'
          : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <HoursSelection />
        <DateSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive ? 'btn-sm xl:w-[164px]' : 'btn-lg xl:w-[184px]'
            } btn btn-accent`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
