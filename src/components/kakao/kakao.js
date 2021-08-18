import { useEffect } from 'react';
import './kakao.scss';

export default function Kakao() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    //kakao api
    try {
      window.Kakao.init('d149effdaec276eadf4b088d938de0f2');
    } catch (e) {}
    try {
      window.Kakao.Channel.createChatButton({
        container: '#kakao-talk-channel-chat-button',
        channelPublicId: '_mQQWs',
        title: 'consult',
        size: 'small',
        color: 'yellow',
        shape: 'pc',
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (e) {
      console.log(e, 'asd');
    }
  }, []);
  return <div class="kakaoBtn" id="kakao-talk-channel-chat-button"></div>;
}
