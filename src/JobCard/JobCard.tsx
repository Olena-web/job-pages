import React  from 'react';
import Avatar from '@mui/material/Avatar';

import {ApiData } from '../types';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { GEOLOCATION_KEY, GEOLOCATION_URL } from '../constants';


export const Location = (data: ApiData["location"]) => {
    const [location, setLocation] = React.useState('');
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
          };
        fetch(GEOLOCATION_URL.concat(`lat=${data.lat}&lon=${data.long}&apiKey=${GEOLOCATION_KEY}`), requestOptions)
    .then(response => response.json())
    .then(result =>  {
        let city = result.features[0].properties.city;
        let country = result.features[0].properties.country;
        console.log(city, country);
        if (city === undefined) city = "Kyiv";
        if (country === undefined) country = "Ukraine";
        setLocation(`${city}, ${country}`);
        return{
            city, country};
    })
    .catch(error => console.log('error', error));
    }, [data.lat, data.long]);
    return (
        <div>
            {location}
        </div>
    );
};
   
export class JobCard extends React.Component<ApiData> {
    el: HTMLDivElement;
constructor(props: ApiData) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
        data: []
    };
    
}

    render() {
        return(
        <div>
          <BookmarkBorderOutlinedIcon/>
          <StarOutlinedIcon/>
          <StarOutlinedIcon/>
          <StarOutlinedIcon/>
          <p>{this.props.name}</p> 
          <Avatar src={this.props.pictures[0]} alt="img" sx={{ width: 85, height: 85 }}></Avatar>
          <p>Department name {this.props.name}</p>
          <p>{this.props.address}</p>
          <p> Updated at {this.props.updatedAt}</p>
          <div className='location'>
          {/* <p> {getLocation(this.props.location.lat, this.props.location.long)} </p> */}
          <Location lat={this.props.location.lat} long={this.props.location.long} />
          </div>
        </div>
        )
    }
}
