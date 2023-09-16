import axios from "axios";
import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const DataProvider = ({ children }) => {
  const [searching, setSearching] = useState(true);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.spacexdata.com/v3/capsules/"
      );
      setData(response?.data);
      setLoading(false);
    } catch (error) {
      console.log("API ERROR:-", error);
      setErrorMsg(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (errorMsg) {
    return <div className="errorComponent">API error: {errorMsg.message}</div>;
  }

  return (
    <SearchContext.Provider value={{ searching, setSearching, data, loading }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
