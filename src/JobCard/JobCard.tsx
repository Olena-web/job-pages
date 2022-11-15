import React  from 'react';
import Avatar from '@mui/material/Avatar';

import {ApiData} from '../types';
import { getLocation } from '../api';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

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
          <p> `${getLocation(this.props.location.lat,this.props.location.long )}`</p>
        </div>
        )
    }
}
