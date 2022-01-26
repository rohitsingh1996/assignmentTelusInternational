import React from 'react';
import { render, screen } from '@testing-library/react';
import TableList from './TableList';
import Employee from '../models/employee';

describe('Editor Component',()=>{
    test('renders Employee Information as a text', () => {
      render(<TableList items={[]} onEditEmployee={function (employee: Employee): void {
          throw new Error('Function not implemented.');
      } } />);
      const linkElement = screen.getByText('Employee Information',{exact:false});
      expect(linkElement).toBeInTheDocument();
    });
})
