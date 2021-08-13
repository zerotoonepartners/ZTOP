import './scss/contact2.scss';
import ci1 from '../../static/images/contactIcon1.png';
import ci2 from '../../static/images/contactIcon2.png';
import ci3 from '../../static/images/contactIcon3.png';
import Location from "./location";

function ContactTwo() {
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  console.log(ww);
  return (
    <div>
      <div className="contactPageWrapper2">

        <div className="contactContentsWrapper2">
          <div className="contactTitleWrapper">
            <span>오시는길</span>
            <br/><p>제로투원파트너스의 회사 위치를 안내해드립니다.</p>
          </div>
          <div className="contentsWrapperOne2">
            {
              ww>1024?
              ww<1440?
              <Location w={ww*0.79} h={wh*0.48}/> //1024초과 1440이하
              :
              <Location w={ww*0.8} h={wh*0.7}/> //1440초과
              :
              ww>768?
              <Location w={ww*0.795} h={wh*0.35}/> //1024이하 768초과
              :
              <Location w={ww*0.79}  h={wh*0.35}/> //768미만
              
            }
            
          </div>
          
          <div className="contentsWrapperTwo2">
            <div className="infoWrapper">
              <div className="contactinfoBox">
                <div className="contactinfoContent1">
                  <span><q>Add. </q>서울시 서초구 서초중앙로 22길 117,4층</span>
                </div>
                <div className="contactinfoContent2">
                <span><q>Tel. </q>02-6228-5100</span>
                </div>
              </div>
              <div className="contactinfoBox">
                <div className="contactinfoContent1">
                <span><q>지하철 </q>교대역 1번 출구 600m , 강남역 8번 출구 1Km</span>
                </div>
                <div className="contactinfoContent2">
                <span><q>Mail. </q>info@ztop.kr</span>
                </div>
              </div>
              

            </div>


          </div>


        </div>
      </div>
    </div>
  );
}

export default ContactTwo;
