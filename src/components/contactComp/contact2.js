import './scss/contact2.scss';
import ci1 from '../static/images/contactIcon1.png';
import ci2 from '../static/images/contactIcon2.png';
import ci3 from '../static/images/contactIcon3.png';

function Contact() {
  return (
    <div>
      <div className="contactPageWrapper">
        <div className="contactMenuBarWrapper">
          <div className="contactMenu">
          <span>기업 검토</span>
          </div>
          <div className="contactMenu">
          <span>오시는 길</span>
          </div>
        </div>

        <div className="contactContentsWrapper2">
          <div className="contentsWrapperOne2">
            <div className="pcMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5579659085147!2d127.01632383205065!3d37.49475630341633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca129eb6c5139%3A0xb4aa89d247509b99!2z7KCc66Gc7Yis7JuQ7YyM7Yq464SI7Iqk!5e0!3m2!1sko!2skr!4v1628059317024!5m2!1sko!2skr"
              width="600" height="450">
              </iframe>
            </div>
            <div className="mobileMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5579659085147!2d127.01632383205065!3d37.49475630341633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca129eb6c5139%3A0xb4aa89d247509b99!2z7KCc66Gc7Yis7JuQ7YyM7Yq464SI7Iqk!5e0!3m2!1sko!2skr!4v1628059317024!5m2!1sko!2skr"
              width="280" height="280">
              </iframe>
            </div>
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

export default Contact;
