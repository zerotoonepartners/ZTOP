import React from 'react';
import './webprofile.scss';
import { ZtopContext } from '../../context/ztop';
import { useContext } from 'react';


function WebProfile({ no }) {
    const { namecard_ } = useContext(ZtopContext);
    console.log(namecard_);

  return (
    <>

        {namecard_.data &&
        namecard_.data.map((item, index) => {
          if (no == item.id) {
            console.log(item);
            return (

                <div className="webProfileWrapper">
                    <div className="picAndContents">
                        <div className="pictureWrapper">
                            <img src={item.picture} alt="" />
                        </div>
                        <div className="contentsWrapper">
                            <div className="name">
                                <span className="nameKor">{item.name}</span>
                                <span className="nameEng">{item.sub_name}</span>
                            </div>
                            <div className="department">
                                <span>{item.status}</span>
                            </div>
                            <div className="contents">
                                <span className="hashTag">{item.personalTag}</span>
                                <span className="introduce">            
                                    {item.intro}
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

                );
            }
          })}
  
  
    </>
  );
}

export default WebProfile;
