import React from 'react';
import './App.css';
import Editor from './components/Editor';
import TableList from './components/TableList';

function App() {
  return (
    <div>
      <TableList />
      <Editor />
    </div>
  );
}

export default App;
