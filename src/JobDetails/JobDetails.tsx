//https://refine.dev/blog/react-router-useparams/

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import {Location} from '../JobCard/JobCard';
import { ApiData } from '../types';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiData } from '../api';
import  {Map} from '../Map/Map';


export const JobDetails =() => {
  const { id } = useParams();
  const [data, setData] = useState<ApiData[]>([]);
  useEffect(() => {

  getApiData().then((data) => {
  setData(data);
    
  }, );
  }, [id]);
  const itemToShow = data.find((item) => item.id === id);
  console.log(itemToShow);
           
            return (
            <>
            <Link to="/">Back to list page</Link> 
            <Card sx={{ maxWidth: 1400, maxHeight: 464, display: 'flex' }} className='card'>
            <Avatar src={itemToShow?.pictures[0]} alt="img" sx={{ width: 85, height: 85 }}></Avatar>
          <CardContent sx={{ maxWidth: 823 }} className='content'>
            <p>{itemToShow?.title}</p> 
            <p>Department name {itemToShow?.name}</p>
            <p>{itemToShow?.address}</p>
            <div className='location'>
            <RoomOutlinedIcon sx={{ fontSize: 15 }}/>
            <Location lat={itemToShow?.location.lat} long={itemToShow?.location.long} />
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
            {/* <Data data={itemToShow?.updatedAt}/> */}
          </div>
          <Map lat={itemToShow?.location.lat} long={itemToShow?.location.long}/>
        </Card>
        </>
        );
       }
     
    

    




