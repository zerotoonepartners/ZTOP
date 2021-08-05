import { createContext, useEffect, useState } from 'react';
import { blogLink, corporateNews, nameCard, pressRelease } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [blogLink_, setBlogLink_] = useState([]);
  const [corporatenews_, setCorporatenews_] = useState([]);
  const [namecard_, setNamecard_] = useState([]);
  const [pressRelease_, setPressRelease_] = useState([]);

  const getBlogLink = () => {
    let data = blogLink();
    setBlogLink_(data);
  };
  const getCorporatenews = () => {
    let data = corporateNews();
    setCorporatenews_(data);
  };
  const getNamecard = () => {
    let data = nameCard();
    setNamecard_(data);
  };
  const getPressRelease = () => {
    let data = pressRelease();
    setPressRelease_(data);
  };
=======
  const [loading,setLoading] = useState(true);
  const [modal,setModal] = useState(false);
  const [blogLink_,setBlogLink_] = useState({
    status: 'idle',
    data: null
  });
  const [corporatenews_,setCorporatenews_] = useState({
    status: 'idle',
    data: null
  });
  const [namecard_,setNamecard_] = useState({
    status: 'idle',
    data: null
  });
  const [pressRelease_,setPressRelease_] = useState({
    status:'idle',
    data:null
  });


  const getBlogLink=async()=>{
    let res = await blogLink();
    try {
      setBlogLink_({
        status:'pending',
        data: null
      });
      setBlogLink_({
        status:'resolved',
        data: res
      });
    }catch(e){
      setBlogLink_({
        status:'rejected',
        data : null
      })
    }
  }
  const getCorporatenews=async()=>{
    let res = await corporateNews();
    try {
      setCorporatenews_({
        status:'pending',
        data: null
      });
      setCorporatenews_({
        status:'resolved',
        data: res
      });
    }catch(e){
      setCorporatenews_({
        status:'rejected',
        data : null
      })
    }
  }
  const getNamecard=async()=>{
    let res = await nameCard();
    try {
      setNamecard_({
        status:'pending',
        data: null
      });
      setNamecard_({
        status:'resolved',
        data: res
      });
    }catch(e){
      setNamecard_({
        status:'rejected',
        data : null
      })
    }
  }
  const getPressRelease=async()=>{
    let res = await pressRelease();
    try {
      setPressRelease_({
        status:'pending',
        data: null
      });
      setPressRelease_({
        status:'resolved',
        data: res
      });
    }catch(e){
      setPressRelease_({
        status:'rejected',
        data : null
      })
    }
  }
>>>>>>> 889363f68734e1778e0ee197003db15919e894a8

  useEffect(() => {
    try {
      getBlogLink();
      getCorporatenews();
      getNamecard();
      getPressRelease();
      setLoading(false);
    } catch (e) {
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
        setPressRelease_,
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
