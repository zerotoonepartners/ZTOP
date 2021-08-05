import { createContext, useEffect, useState } from 'react';
import { bloglink, namecard, pressrelease, corporatenews } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [blogLinkData, setBlogLinkData] = useState({
    id: undefined,
    title: undefined,
    link: undefined,
  });
  const [corporateNewsData, setCorpoerateNewsData] = useState({});

  async function fetchData() {
    try {
      let blData = await bloglink();
      setBlogLinkData(blData);
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
        blogLinkData,
        setBlogLinkData,
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
