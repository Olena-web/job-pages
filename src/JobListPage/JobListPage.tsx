import React , {useState, useEffect} from 'react';
import { getApiData } from '../api';
import {ApiData} from '../types';
import { JobCard } from '../JobCard/JobCard';

export function JobList() {
    const [data, setApiData] = useState<ApiData[]>([]);
    useEffect(() => {
        getApiData().then((data) => {
        setApiData(data);
        });
    }, []);
    
    return (
        <div>
        <JobCard data={data[0]} />
        <JobCard data={data[1]} />
        <JobCard data={data[2]} />
        </div>
    );
    }