import { createContext, useEffect, useState } from 'react';
import {
  blogLink,
  ztopNotice,
  nameCard,
  news,
  detail,
  blogLink1,
  blogLink2,
  blogLink3,
} from '../api/api';
const ZtopContext = createContext();

const ZtopContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState();
  const [namecardTarget, setNamecardTarget] = useState('');

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
  const [detail_, setDetail_] = useState({
    status: 'idle',
    data: null,
  });

  const [bloglink1_, setBlogLink1_] = useState({
    status: 'idle',
    data: null,
  });
  const [bloglink2_, setBlogLink2_] = useState({
    status: 'idle',
    data: null,
  });
  const [bloglink3_, setBlogLink3_] = useState({
    status: 'idle',
    data: null,
  });

  const [selectionNews_, setSelectionNews_] = useState(undefined);
  const [selectionNotice_, setSelectionNotice_] = useState(undefined);

  const getBlogLink = async () => {
    let res = await blogLink();
    try {
      setBlogLink_({
        status: 'pending',
        data: null,
      });
      setBlogLink_({
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setBlogLink_({
        status: 'rejected',
        data: null,
      });
    }
  };

  const getBlogLink1 = async () => {
    let res = await blogLink1();
    try {
      setBlogLink1_({
        status: 'pending',
        data: null,
      });
      setBlogLink1_({
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setBlogLink1_({
        status: 'rejected',
        data: null,
      });
    }
  };

  const getBlogLink2 = async () => {
    let res = await blogLink2();
    try {
      setBlogLink2_({
        status: 'pending',
        data: null,
      });
      setBlogLink2_({
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setBlogLink2_({
        status: 'rejected',
        data: null,
      });
    }
  };

  const getBlogLink3 = async () => {
    let res = await blogLink3();
    try {
      setBlogLink3_({
        status: 'pending',
        data: null,
      });
      setBlogLink3_({
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setBlogLink3_({
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
        status: 'resolved',
        data: res.reverse(),
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
        status: 'resolved',
        data: res.reverse(),
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
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setNews_({
        status: 'rejected',
        data: null,
      });
    }
  };

  const getDetail = async (id) => {
    let res = await detail(id);
    console.log(res, 'this is detail');
    try {
      setDetail_({
        status: 'pending',
        data: null,
      });
      setDetail_({
        status: 'resolved',
        data: res.reverse(),
      });
    } catch (e) {
      setDetail_({
        status: 'rejected',
        data: null,
      });
      console.log(e);
    }
  };
  useEffect(() => {
    try {
      getBlogLink();
      getZtopNotice();
      getNamecard();
      getNews();
      // getBlogLink1();
      // getBlogLink2();
      // getBlogLink3();
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
        selectionNews_,
        setSelectionNews_,
        selectionNotice_,
        setSelectionNotice_,
        detail_,
        setDetail_,
        event,
        setEvent,
        namecardTarget,
        setNamecardTarget,
        namecardTarget,
        setNamecardTarget,
        bloglink1_,
        bloglink2_,
        bloglink3_,
        setBlogLink1_,
        setBlogLink2_,
        setBlogLink3_,
      }}
    >
      {children}
    </ZtopContext.Provider>
  );
};

export { ZtopContextProvider, ZtopContext };
