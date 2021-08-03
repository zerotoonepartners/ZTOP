import './scss/contact.scss';
import ci1 from '../static/images/contactIcon1.png';
import ci2 from '../static/images/contactIcon2.png';
import ci3 from '../static/images/contactIcon3.png';

function Contact() {
  return (
    <div>
      <div className="contactPageWrapper">
        <div className="contactMenuBarWrapper">
          기업 검토
        </div>
        <div className="contactContentsWrapper">
          <div className="contentsWrapperOne">
            <span>간단한 신청 친절한 답변!<br/>
            아래 신청하기를 눌러 메일을 보내주세요</span>
          </div>
          <div className="contentsWrapperTwo">
            <div className="iconAndNameWrapper">
              <div className="iconAndName">
              <img src={ci1} className="icon" />
                <span className="name">1. IR 자료, 명함<br/>준비하기</span>
              </div>
              <div className="iconAndName">
              <img src={ci2} className="icon" />
                <span className="name">2. 신청폼 작성하기</span>
              </div>
              <div className="iconAndName">
              <img src={ci3} className="icon" />
                <span className="name">3. 메일 보내기</span>
              </div>

            </div>


          </div>
          <div className="contentsWrapperThree">
            <div className="buttonWrapper">
              <span>신청하기</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
