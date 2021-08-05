import { createContext, useEffect, useState } from 'react';
import { blogLink,corporateNews,nameCard,pressRelease } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [modal,setModal] = useState(false);
  const [blogLink_,setBlogLink_] = useState();
  const [corporatenews_,setCorporatenews_] = useState();
  const [namecard_,setNamecard_] = useState();
  const [pressRelease_,setPressRelease_] = useState();


  const getBlogLink=()=>{
    let data = blogLink();
    setBlogLink_(data);
  }
  const getCorporatenews=()=>{
    let data = corporateNews();
    setCorporatenews_(data);
  }
  const getNamecard=()=>{
    let data = nameCard();
    setNamecard_(data);
  }
  const getPressRelease=()=>{
    let data = pressRelease();
    setPressRelease_(data);
  }

  useEffect(() => {
    try{
    getBlogLink();
    getCorporatenews();
    getNamecard();
    getPressRelease();
    setLoading(false);
    }catch(e){
      alert(e);
    }
  }, []);
  return (
    <ZtopContext.Provider
      value={{
        loading,
        setLoading,
        modal,
        setModal,
        blogLink_,
        setBlogLink_,
        corporatenews_,
        setCorporatenews_,
        namecard_,
        setNamecard_,
        pressRelease_,
        setPressRelease_
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
