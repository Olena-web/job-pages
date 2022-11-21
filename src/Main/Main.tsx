import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { PaginationComponent } from '../Pagination/Pagination';
import { JobDetails } from '../JobDetails/JobDetails';
import { ApiData } from '../types';

export class Main extends React.Component <ApiData> {
  el: HTMLDivElement;
constructor(props: ApiData) {
  super(props);
  this.el = document.createElement('div');
  this.state = {
      data: []
  };
  
}
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<PaginationComponent />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path={`/details/${this.props.id}`} element={<JobDetails   />} /> */}
          <Route path={`/details/:id`} element={<JobDetails   />} />
        </Routes>
      </main>
    );
  }
}