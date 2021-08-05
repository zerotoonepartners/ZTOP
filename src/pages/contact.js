import './scss/contact.scss';
import ci1 from '../static/images/contactIcon1.png';
import ci2 from '../static/images/contactIcon2.png';
import ci3 from '../static/images/contactIcon3.png';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function Contact() {
  const [contact, setContact] = useState(0)
  const [test, setTest] = useState(2)
  useEffect(()=>{
    console.log(contact)
  },[contact])

  useEffect(()=>{
    console.log(test)
  },[test])


  return (
    <div>
      <div className="contactPageWrapper">
        <div className="contactMenuBarWrapper">
          <div className="contactMenu" onClick={()=>setTest(0)}>
          <span>기업 검토</span>
          </div>
          <div className="contactMenu" onClick={()=>setTest(1)}>
          <span>오시는 길</span>
          </div>
        </div>
        
        <div className="contactContentsWrapper">
          <div className="contentsWrapperOne">
            <span>간단한 신청 빠른 답변!<br/>
            아래 신청하기를 눌러 카카오톡으로 문의 및 신청을 해주세요</span>
          </div>
          <div className="contentsWrapperTwo">
            <div className="iconAndNameWrapper">
              <div className="iconAndName">
              <img src={ci1} className="icon" />
                <span className="name">
                  <span className="desktopName">1. IR자료/명함/사업자등록증/<br/>4대보험명부 준비</span>
                  <span className="mobileName">1. 기업자료 준비</span>
                </span>
              </div>
              <div className="iconAndName">
              <img src={ci2} className="icon" />
                <span className="name">2. 카카오톡 문의하기</span>
              </div>
              <div className="iconAndName">
              <img src={ci3} className="icon" />
                <span className="name">3. 기업서류 보내기</span>
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
