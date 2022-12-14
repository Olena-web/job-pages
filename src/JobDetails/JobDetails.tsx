//https://refine.dev/blog/react-router-useparams/
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CardContent from '@mui/material/CardContent';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { Container } from '@mui/material';

import { ApiData } from '../types';
import { getApiData } from '../api';
import  {Map} from '../Map/Map';
import {Data } from '../Data/Data';
import { Description } from '../Description/Description';

import './JobDetails.css';


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
              <h2>JOB DETAILS</h2>
              <div className='save-share'>
                <BookmarkBorderOutlinedIcon sx={{ maxWidth: 17 }}/>
                <div> Save to my list</div>
                <ShareOutlinedIcon sx={{ maxWidth: 17 }}/>
                <div> Share </div>
              </div>
            </header>
              <div className='separator'></div>
              <div className= 'button-wrapper'>
              <button className='apply'>Apply now</button>
            </div>
            <div className='details'>
               <CardContent sx={{ maxWidth: 823 }} className='content'>
                <div className='title'>
                  <p className='title-name'>{itemToShow?.title}</p> 
                  <div className='salary'>
                    <span>
                    <EuroSymbolIcon sx={{ maxWidth: 17 }}/> 
                    {itemToShow?.salary} 
                    </span>
                    
                    <span>Brutto, per year</span>
                  </div>
                </div>
                <div className='data'>
                   {Data(itemToShow.createdAt, itemToShow.updatedAt)}
                </div>
            <div className='description'>
            
             { Description(itemToShow?.description)}
            </div>
            <div className= 'button-wrapper'>
              <button className='apply'>Apply now</button>
            </div>
          <div className='add-wrapper'>
          <div className='additional'>
            <h2> Additional info </h2>
            <div className='separator'></div>
            <h3>Employment type</h3>
            <div className='employment_type'>
              <p>{itemToShow?.employment_type[0]}</p>
              <p>{itemToShow?.employment_type[1]}</p>
            </div>
            <h3>Benefits</h3>
            <div className='benefits'>
              <p>{itemToShow?.benefits[0]}</p>
              <p>{itemToShow?.benefits[1]}</p>
            </div>
      
          </div>
          <div className='images'>
            <h2>Attached images</h2>
            <div className='separator'></div>
            <div className='image-wrapper'>
              <img src={itemToShow?.pictures[0]} alt="img1" style={{ width: 234, height: 156 }} />
              <img src={itemToShow?.pictures[1]} alt="img2" style={{ width: 234, height: 156 }} />
              <img src={itemToShow?.pictures[2]} alt="img3" style={{ width: 234, height: 156 }} />
            </div>
          </div>
          </div>  

          </CardContent> 
        </div>
        <Link className='return' to="/" >  
        <ChevronLeftOutlinedIcon/>
        RETURN TO JOB BOARD</Link>
          </div>
          <aside>
            <h2 className='contacts'>Contacts</h2>
            <div className='separator separator-3'></div>
            <div className='contact-wrapper'>
            <div className='company'>
              <h3>Department name {itemToShow?.name}</h3>
              <div className='location'>
              <RoomOutlinedIcon sx={{ fontSize: 15 }}/>
              <p>{itemToShow?.address}</p>
              </div>
              <p>{itemToShow?.phone}</p>
              <p>{itemToShow?.email}</p>
            </div>
          <Map lat={itemToShow?.location.lat} long={itemToShow?.location.long} width={0} height={0}/>
            </div>
          </aside>
        </div>
      </Container>
        );
       }
}

     
    

    




