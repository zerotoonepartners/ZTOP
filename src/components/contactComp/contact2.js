import './scss/contact2.scss';
import ci1 from '../../static/images/contactIcon1.png';
import ci2 from '../../static/images/contactIcon2.png';
import ci3 from '../../static/images/contactIcon3.png';
import Location from "./location";

function ContactTwo() {
  let ww = window.innerWidth;
  console.log(ww);
  return (
    <div>
      <div className="contactPageWrapper2">
      

        <div className="contactContentsWrapper2">
          <div className="contentsWrapperOne2">
            {
              ww>1024?
              ww<=1440?
              <Location w={ww*0.7} h={ww*0.4}/>
              :
              <Location w={ww*0.7} h={ww*0.3}/>
              :
              <Location w={ww*0.85} h={ww*0.4}/>
              
            }
            
          </div>
          
          <div className="contentsWrapperTwo2">
            <div className="infoWrapper">
              <div className="info">
                <span className="strong">Tel. </span>
                <span> 02-6228-5100</span>
              </div>
              <div className="info">
                <span className="strong">Mail. </span>
                <span> info@ztop.kr</span>
              </div>
              <div className="info">
                <span className="strong">Add. </span>
                <span> 서울시 서초구 서초중앙로 22길 117, 4층</span>
              </div>
              <div className="info">
                <span className="strong">· </span>
                <span> 교대역 1번 출구 600m<br/></span>
                <span className="strong">· </span>
                <span> 강남역 8번 출구 1km</span>
              </div>

            </div>


          </div>


        </div>
      </div>
    </div>
  );
}

export default ContactTwo;
