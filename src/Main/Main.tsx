import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { JobList } from '../JobListPage/JobListPage';
import { NotFound } from '../NotFound/NotFound';

export class Main extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<JobList />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}