import React , {useState, useEffect} from 'react';
import { getApiData } from '../api';
import {ApiData} from '../types';

export function JobCard(props: {data: ApiData}, i: number) {
    const [data, setApiData] = useState<ApiData[]>([]);
    useEffect(() => {
        getApiData().then((data) => {
        setApiData(data);
        });
    }, []);
    
    return (
        <div>
          <p>{data[i].name}</p>
          <img src={data[i].pictures[0]} alt="img"></img>
          <p>Department name {data[i].name}</p>
          <p>{data[i].address}</p>
          <p> Created at {data[i].createdAt}</p>
        </div>
    );
    }