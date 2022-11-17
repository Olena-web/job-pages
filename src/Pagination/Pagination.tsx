//https://github.com/codebucks27/react-pagination-component

import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { getApiData } from '../api';
import { ApiData } from "../types";
import { JobCard } from "../JobCard/JobCard";


const JobList = (data: ApiData[]) => {
  
  return (
    <ul>
    {data.map((data, index) => (
    <li key= {index}>
    <JobCard address={data.name} benefits={[]} createdAt={data.createdAt} description={''} email={''} employment_type={''} id={''} location={data.location} name={data.name} phone={''} pictures={data.pictures} salary={''} title={data.title} updatedAt={data.updatedAt} />
    </li>
))}
</ul>
  );
};

export function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
    getApiData().then((data) => {
    setData(data);
    });
}, []);

 
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setcurrentPage(value);
  };

  return (
    <>
      {JobList(currentItems)}
      <Stack spacing={2}>
        <Pagination count={18} page={currentPage} onChange={handleChange} />
    </Stack>
    </>
  );
}

export default PaginationComponent;