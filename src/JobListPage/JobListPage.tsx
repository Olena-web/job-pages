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
            {/* {data.map((data, i) => (
                <JobCard data={data} key={i}/>
            ))}
        </div> */}
        <JobCard data={{
                address: '',
                benefits: [],
                createdAt: '',
                description: '',
                email: '',
                employment_type: '',
                id: '',
                location: '',
                name: '',
                phone: '',
                pictures: [],
                salary: '',
                title: '',
                updatedAt: ''
            }}  />
        
        </div>
    );
    }