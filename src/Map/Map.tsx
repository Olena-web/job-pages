import React  from 'react';
import {  GEOLOCATION_KEY } from '../constants';
import { ApiData } from '../types';


export const Map = (data: ApiData['location'], width: number, height: number) => {
    return (
        <div>
           <img style={{width: `${width}`, height: `${height}`}} 
                src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=402&height=218&center=lonlat:${data.long},${data.lat}&zoom=14&apiKey=${GEOLOCATION_KEY}`}
            alt="map">
            </img>

        </div>
    );
};

