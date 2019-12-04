import React from 'react';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Maps = new ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGVnZWdlbmQiLCJhIjoiY2szcm15azFvMGN5cTNvcGNxZm56aTJyZiJ9.qffbLmm9HEIW-asF1fhIfA'
});
console.log(Maps)
export default class Map extends React.Component{
    
    render(){
        return (
        <Maps
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Maps>
        )
    }
}
