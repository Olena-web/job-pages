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
import {Data } from '../Data/Data';
import './JobDetails.css';
import { Container } from '@mui/material';


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

      if (itemToShow === undefined) {
        return <div>Loading...</div>;
      }
      else {
    return (
      <Container>
        <div className='job-details-page'>
          <div className='job-details'>
            <header>
              <h1>JOB DETAILS</h1>
              <BookmarkBorderOutlinedIcon sx={{ maxWidth: 17 }}/>
              <button> Save to my list</button>
              <BookmarkBorderOutlinedIcon sx={{ maxWidth: 17 }}/>
              <button> Share </button>
            </header>
           <button>Apply now</button>
            <Card sx={{ maxWidth: 1400, display: 'flex' }} className='details'>
               <CardContent sx={{ maxWidth: 823 }} className='content'>
                <p>{itemToShow?.title}</p> 
                <div className='salary'>
                  {itemToShow?.salary} Brutto, per year
                </div>
                
            
            {Data(itemToShow.createdAt, itemToShow.updatedAt)}
            <div className='description'>
              {itemToShow?.description}
            </div>
            <button>Apply now</button>
          <div className='additional'>
            <h2> Additional info </h2>
            <h3>Employment type</h3>
            <div>
              <p>{itemToShow?.employment_type[0]}</p>
              <p>{itemToShow?.employment_type[1]}</p>
            </div>
            <h3>Benefits</h3>
            <div>
              <p>{itemToShow?.benefits[0]}</p>
              <p>{itemToShow?.benefits[1]}</p>
            </div>
      
          </div>
          
          <div className='images'>
            <h2>Attached images</h2>
            <div className='image-wrapper'>
              <img src={itemToShow?.pictures[0]} alt="img1" style={{ width: 85, height: 85 }} />
              <img src={itemToShow?.pictures[1]} alt="img2" style={{ width: 85, height: 85 }} />
              <img src={itemToShow?.pictures[2]} alt="img3" style={{ width: 85, height: 85 }} />
            </div>
          </div>
          </CardContent> 
        </Card>
        <Link to="/">RETURN TO JOB BOARD</Link> 
          </div>
          <aside>
          <p>Department name {itemToShow?.name}</p>
          <p>{itemToShow?.address}</p>
          <div className='location'>
          <RoomOutlinedIcon sx={{ fontSize: 15 }}/>
          <Location lat={itemToShow?.location.lat} long={itemToShow?.location.long} />
          </div>
          <p>{itemToShow?.phone}</p>
          <p>{itemToShow?.email}</p>
          <Map lat={itemToShow?.location.lat} long={itemToShow?.location.long} width={402} height={430}/>
          </aside>
        </div>
      </Container>
        );
       }
}

     
    

    




