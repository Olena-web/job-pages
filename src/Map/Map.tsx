import React  from 'react';
import {  GEOLOCATION_KEY, GEOLOCATION_URL } from '../constants';
import { ApiData } from '../types';



export const Map = (data: ApiData["location"]) => {
    const [map, setMap] = React.useState('');
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
          };
        fetch(`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${data.long},${data.lat}&zoom=14&apiKey=${GEOLOCATION_KEY}`, requestOptions)
        
    .then(response => response.json())
    .then(result =>  {
        let map = result.location;
        let src = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${data.long},${data.lat}&zoom=14&apiKey=${GEOLOCATION_KEY}`
        setMap(`${map}`);
        return{
            map};
    })
    .catch(error => console.log('error', error));
    }, [data.lat, data.long]);
    return (
        <div>
           <img width="600" height="400" 
src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${data.long},${data.lat}&zoom=14&apiKey=${GEOLOCATION_KEY}`}
alt="map">
</img>

        </div>
    );
};

