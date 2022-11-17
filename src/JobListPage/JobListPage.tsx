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
            <ul>
                {data.map((data, index) => (
                    
                <li key= {index}>
                <JobCard address={data.name} benefits={[]} createdAt={data.createdAt} description={''} email={''} employment_type={''} id={''} location={data.location} name={data.name} phone={''} pictures={data.pictures} salary={''} title={''} updatedAt={data.updatedAt} filter={function (arg0: (item: any) => boolean): unknown {
                            throw new Error('Function not implemented.');
                        } } />
                </li>
            ))}
            </ul>
        </div>
      
    );
    }