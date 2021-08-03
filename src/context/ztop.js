import { createContext, useEffect, useState } from 'react';
import { getData } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
  const [data,setData] = useState()

  async function fetchData() {
    try {
      let temp = await getData();
      console.log(temp)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ZtopContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
