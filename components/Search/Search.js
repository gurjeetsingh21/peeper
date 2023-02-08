import HTTP_SERVICE_CALL from "@/HTTP_SERVICE/HTTP_SERVICE_CALL";
import { AutoComplete, Input } from "antd";
import * as Constants from "@/Constants";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import {debounce} from "lodash";

const searchResult = async (query) => {
  console.log("====================================");
  console.log("searchResult");
  console.log("====================================");
  const graphQuery = `query{tokens(first:5,where:{uri_contains:"${query}"}){
    uri
  }}`;

  try {
    const { data = null } = await axios.post(Constants.REQUEST_GRAPH_URL, {
      query: graphQuery,
    });
    if (data?.data?.tokens?.length) {
      return data?.data?.tokens?.map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div className="flex gap-3 items-center p-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#7BCEFA] via-[#E37DF4] to-[#F6CB5B]"></div>
              <span>{_?.uri}</span>
            </div>
          ),
        };
      });
    } else {
      return [
        {
          value: null,
          label: (
            <div className="p-2">
              <span>No result found</span>
              <div className="flex justify-between items-center">
                <span>{query}.shm</span>
                <span className="ant-btn  ant-btn-primary bg-blue-500 px-3 py-1 rounded-lg">
                  Register
                </span>
              </div>
            </div>
          ),
        },
      ];
    }
  } catch (error) {
    console.log("====================================");
    console.log({ error });
    console.log("====================================");
    return [
      {
        value: null,
        label: (
          <div className="p-2">
            <span>Something went wrong</span>
          </div>
        ),
      },
    ];
  }
};

const Search = () => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const handleSearch = async (value) => {
    const searchRes = await searchResult(value);
    if (!searchRes) {
      setError("No result found.");
    } else {
      setOptions(searchRes ? searchRes : []);
    }
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={debouncedResults}
    >
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=" text-gray-400"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:bg-black/70 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for domains"
        />
      </div>
    </AutoComplete>
  );
};
export default Search;
