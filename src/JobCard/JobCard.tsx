import React  from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {ApiData } from '../types';
import { GEOLOCATION_KEY, GEOLOCATION_URL } from '../constants';
import './JobCard.css';



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
        let name = result.features[0].properties.name;
        if (city === undefined) city = "";
        if (country === undefined) country = "";
        if (name === undefined) name = "";
        setLocation(`${city} ${country} ${name}`);
        return{
            city, country, name};
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
Data = (data: string) => {
    const one_day=1000*60*60*24;
    const d = new Date((data));
    const dayToday = new Date().getTime();
    const diff = Math.ceil((dayToday - d.getTime())/(one_day));
    if (diff === 0) {
       return (<div>"Posted today"</div>);
    } else if (diff === 1) {
        return (<div>"Posted yesetrday"</div>);
    } else {
        return (<div>"Posted {diff} days ago"</div>);
    }
};

    render() {
        return(
        <Card sx={{ maxWidth: 1400, maxHeight: 464, display: 'flex' }} className='card' id = 'card'>
            <Avatar src={this.props.pictures[0]} alt="img" sx={{ width: 85, height: 85 }}></Avatar>
          <CardContent sx={{ maxWidth: 823 }} className='content'>
            <NavLink to={`/details/${this.props.id}`}>
            <p  id={this.props.id}>{this.props.title}</p> 
            </NavLink>
            <p>Department name {this.props.name}</p>
            <p>{this.props.address}</p>
            <div className='location'>
            <RoomOutlinedIcon sx={{ fontSize: 15 }}/>
            <Location lat={this.props.location.lat} long={this.props.location.long} />
            </div>
          </CardContent>
          <div className='likes'>
            <StarOutlinedIcon/>
            <StarOutlinedIcon/>
            <StarOutlinedIcon/>
            <StarOutlinedIcon/>
            <StarOutlinedIcon/>
          </div>
          <div className="marks">
            <BookmarkBorderOutlinedIcon sx={{ maxWidth: 17 }}/>
            {this.Data(this.props.updatedAt)}
            </div>
        </Card>
        )
    }
}
