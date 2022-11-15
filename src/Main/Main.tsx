import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { PaginationComponent } from '../Pagination/Pagination';

export class Main extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<PaginationComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}