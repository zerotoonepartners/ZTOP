import React, { useEffect,useContext } from 'react';
import { ZtopContext } from '../../../context/ztop';

function Kakaolink() {
    const { namecardTarget } = useContext(ZtopContext);
  useEffect(() => {
    try {
      window.Kakao.init('d149effdaec276eadf4b088d938de0f2');
    } catch (e) {}
      window.Kakao.Link.createDefaultButton({
        container: '#kakao_share',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '내용!',
          imageUrl: namecardTarget,
          link: {
            mobileWebUrl: '',
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '제로투원파트너스',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    
  }, [namecardTarget]);
  return <div></div>;
}

export default Kakaolink;