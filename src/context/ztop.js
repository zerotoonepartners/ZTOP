import { createContext, useEffect, useState } from 'react';
import { blogLink,corporateNews,nameCard,pressRelease } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
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
        data: res.reverse()
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
        data: res.reverse()
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
        data: res.reverse()
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
        data: res.reverse()
      });
    }catch(e){
      setPressRelease_({
        status:'rejected',
        data : null
      })
    }
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
