import React from 'react';
import './fourPicture.scss';
import layer1 from '../../../static/images/shortlayer1.png';
import layer2 from '../../../static/images/shortlayer2.png';
import layer3 from '../../../static/images/shortlayer3.png';
import layer4 from '../../../static/images/shortlayer4.png';


function FourPicture() {

  return (
    <>
    <div className="fourPictureWrapper">
      <div className="picturesWrapper">
        <div className="onePicture">
          <div className="subject">
            <span>ACCELERATOR</span>
          </div>
          <img src={layer1}></img>
        </div>
        <div className="onePicture">
          <div className="subject">
            <span>COMPANY BUILDER</span>
          </div>
          <img src={layer2}></img>
        </div>
        <div className="onePicture">
          <div className="subject">
            <span>CONSULTANT</span>
          </div>
          <img src={layer3}></img>
        </div>
        <div className="onePicture">
          <div className="subject">
            <span>FUND RAISER</span>
          </div>
          <img src={layer4}></img>
        </div>
      </div>
    


    </div> 
    </>
  );
}

export default FourPicture;
