import React from 'react';
import GoogleMapReact from 'google-map-react';
import {ENVS} from "../../configs.ts";

const CustomMap: React.FC = () => {
    const defaultProps = {
        center: {
            lat: 42.8756483,
            lng: 74.5845829
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: ENVS.mapUrl }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {
                    console.log(map, maps);
                }}
            >
                {/*<div*/}
                {/*    lat={37.7749}*/}
                {/*    lng={-122.4194}*/}
                {/*    text="My Marker"*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>
    );
};

export default CustomMap;
