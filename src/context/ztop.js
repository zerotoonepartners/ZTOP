import { createContext, useEffect, useState } from 'react';
import { blogLink, ztopNotice, nameCard, news } from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [blogLink_, setBlogLink_] = useState({
    status: 'idle',
    data: null,
  });
  const [ztopNotice_, setZtopNotice_] = useState({
    status: 'idle',
    data: null,
  });
  const [namecard_, setNamecard_] = useState({
    status: 'idle',
    data: null,
  });
  const [news_, setNews_] = useState({
    status: 'idle',
    data: null,
  });
  const [selectionNews_,setSelectionNews_] = useState(undefined);
  const [selectionNotice_,setSelectionNotice_]  = useState(undefined);

  const getBlogLink = async () => {
    let res = await blogLink();
    try {
      setBlogLink_({
        status: 'pending',
        data: null,
      });
      setBlogLink_({
        status:'resolved',
        data: res.reverse()
      });
    } catch (e) {
      setBlogLink_({
        status: 'rejected',
        data: null,
      });
    }
  };
  const getZtopNotice = async () => {
    let res = await ztopNotice();

    try {
      setZtopNotice_({
        status: 'pending',
        data: null,
      });
      setZtopNotice_({
        status:'resolved',
        data: res.reverse()
      });
    } catch (e) {
      setZtopNotice_({
        status: 'rejected',
        data: null,
      });
    }
  };
  const getNamecard = async () => {
    let res = await nameCard();
    try {
      setNamecard_({
        status: 'pending',
        data: null,
      });
      setNamecard_({
        status:'resolved',
        data: res.reverse()
      });
    } catch (e) {
      setNamecard_({
        status: 'rejected',
        data: null,
      });
    }
  };
  const getNews = async () => {
    let res = await news();
    console.log(res);
    try {
      setNews_({
        status: 'pending',
        data: null,
      });
      setNews_({
        status:'resolved',
        data: res.reverse()
      });
    } catch (e) {
      setNews_({
        status: 'rejected',
        data: null,
      });
    }
  };

  useEffect(() => {
    try {
      getBlogLink();
      getZtopNotice();
      getNamecard();
      getNews();
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
        ztopNotice_,
        setZtopNotice_,
        namecard_,
        setNamecard_,
        news_,
        setNews_,
        selectionNews_,setSelectionNews_,
        selectionNotice_,setSelectionNotice_
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
