import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import {Location} from '../JobCard/JobCard';
import { ApiData } from '../types';

export const JobDetails = (props: ApiData) => {
//     const params = useParams();
//     const itemToShow = params.itemToShow;
//     const elementArray = props.filter(item => item.id === itemToShow)
//     const itemFound = elementArray
//     if (itemFound !== undefined  && itemFound !== null) {

// console.log(itemFound);

        
            return (
            <Card sx={{ maxWidth: 1400, maxHeight: 464, display: 'flex' }} className='card'>
            <Avatar src={props.pictures[0]} alt="img" sx={{ width: 85, height: 85 }}></Avatar>
          <CardContent sx={{ maxWidth: 823 }} className='content'>
            <p>{props.title}</p> 
            <p>Department name {props.name}</p>
            <p>{props.address}</p>
            <div className='location'>
            <RoomOutlinedIcon sx={{ fontSize: 15 }}/>
            <Location lat={props.location.lat} long={props.location.long} />
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
            {/* <Data data={props.updatedAt}/> */}
          </div>
        </Card>
    //     <div>
    //         <p>The url value of key "itemToShow" is: {itemToShow}</p>
          
    //         {/* <h1>{itemFound}</h1> */}
    //         {/* <p>In Cart: {props.filter(element=>element.id === itemFound.id).length}</p> */}
    //         {/* <p>Product Id:&nbsp;{itemFound.id}</p>
    //         <p>{itemFound.description}</p>
    //         <p>${itemFound.price}</p> */}
    //     </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <p>Item not found</p>
    //         </div>
    //     )
    // }
)}   


