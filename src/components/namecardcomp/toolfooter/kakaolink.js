import React, { useEffect, useContext } from 'react';
import { ZtopContext } from '../../../context/ztop';

function Kakaolink({ item }) {
  const { namecardTarget } = useContext(ZtopContext);

  useEffect(() => {
    if (namecardTarget && namecardTarget.length > 1) {
      console.log(namecardTarget);
      try {
        window.Kakao.init('d149effdaec276eadf4b088d938de0f2');
      } catch (e) {}
      try {
        window.Kakao.Link.createDefaultButton({
          container: '#kakao_share',
          objectType: 'feed',
          content: {
            title: `제로투원파트너스 ${item.name}입니다.`,
            description: '',
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
      } catch (e) {}
    }
  }, [namecardTarget]);
  return <div></div>;
}

export default Kakaolink;
