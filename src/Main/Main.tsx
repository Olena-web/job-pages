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
          <Route path={`/details`} element={<JobDetails filter={function (arg0: (item: any) => boolean): unknown {
            throw new Error('Function not implemented.');
          } } address={''} benefits={[]} createdAt={''} description={this.props.description} email={''} employment_type={''} id={''} location={{
            lat: 0,
            long: 0
          }} name={''} phone={''} pictures={''} salary={''} title={''} updatedAt={''} />} />
          
        </Routes>
      </main>
    );
  }
}