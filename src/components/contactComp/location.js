import React, {useEffect} from 'react';

const {kakao} = window;

const Location=({w,h})=>{
    console.log(w);
    console.log(h);
    const styles={width:w,height:h}
    useEffect(()=>{
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.494660, 127.021093),
            level: 4
        };
        let map = new kakao.maps.Map(container,options);
        let markerPosition = new kakao.maps.LatLng(37.494661, 127.020193);
        let marker = new kakao.maps.Marker({
            position : markerPosition
        });
        marker.setMap(map);
    })
    return(
        <div>
            <div id="map" style={styles}></div>
        </div>
    )
}

export default Location;