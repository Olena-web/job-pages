import React , {useState, useEffect} from 'react';
import { getApiData } from '../api';
import {ApiData} from '../types';
import DeleteIcon from '@mui/icons-material/Delete';


export function JobCard(props: {data: ApiData}, i: number) {
    const [data, setApiData] = useState<ApiData[]>([]);
    useEffect(() => {
        getApiData().then((data) => {
        setApiData(data);
        console.log(data);
        });
    }, []);
    
    return (
        <div>
          <DeleteIcon/>
          {/* //<p>{data[0].name}</p> */}
          {/* <img src={data[0].pictures[0]} alt="img"></img>
          <p>Department name {data[0].name}</p>
          <p>{data[0].address}</p>
          <p> Created at {data[0].createdAt}</p> */}
        </div>
    );
    }