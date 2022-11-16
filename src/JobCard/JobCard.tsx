import React  from 'react';
import Avatar from '@mui/material/Avatar';

import {ApiData } from '../types';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { API_URL, BEARER_TOKEN, GEOLOCATION_KEY, GEOLOCATION_URL } from '../constants';
import { JsxElement } from 'typescript';



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

export const Data = (data: ApiData["updatedAt"]) => {
    const [date, setDate] = React.useState('');
    React.useEffect(() => {
        fetch(API_URL, {
            //mode: 'no-cors',
            //credentials: 'include',
            method: "GET",
            headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            },
           
        }).then(response => response.json())
        .then(result => {
            let date = result.updatedAt;
            var one_day=1000*60*60*24;
            const d = new Date(date);
            const dayToday = new Date().getTime();
            const diff = Math.ceil((dayToday - d.getTime())/(one_day));
            console.log(date);
            setDate(`${diff}`);
            return diff;
        }).catch(error => console.log('error', error));
                
    }, [data]);


       return (
        <div>
           Posted {date} ago
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
          <Data data={this.props.updatedAt}/>
          <Location lat={this.props.location.lat} long={this.props.location.long} />
        </div>
        )
    }
}
