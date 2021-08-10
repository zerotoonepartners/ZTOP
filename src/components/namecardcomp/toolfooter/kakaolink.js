import React, { useEffect } from 'react';

function Kakaolink({ kp }) {
  const { cp } = kp.params;
  useEffect(() => {
    console.log(cp);
    const script = document.createElement('script');
    try {
      window.Kakao.init('d149effdaec276eadf4b088d938de0f2');
    } catch (e) {}
    let kp = '123';
    window.Kakao.Link.createDefaultButton({
      container: '#kakao_share',
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '내용!',
        imageUrl: `${cp}`,
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
    document.body.appendChild(script);
    document.body.removeChild(script);
    console.log(cp);
  }, []);
  return <div></div>;
}

export default Kakaolink;
