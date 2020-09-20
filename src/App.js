import React, { useState } from 'react';
import './App.css';
import AppPreview from './AppPreview';

const App = () => {
  const [input, setInput] = useState('');
  const [labelName, setLabelName] = useState('Search');

  const [columns, setColumns] = useState([]);
  const [columnName, setColumnName] = useState('');

  const code = `function App() {
  return(
    <div>
      <label htmlFor='search'>${labelName}: </label>
      <input type='text' id='search' name='search'/>
      <br/>
      <br/>
      <table>
        <tr>  
          <th>ID</th>
          <th>Name</th>
          ${columns.map((c) => c.columnName).join('\n\t  ')}
        </tr>
        <tr>
          <td>1</td>
          <td>produkt 1</td>
          ${columns.map((c) => c.randomData).join('\n\t  ')}
        </tr>
        <tr>
          <td>2</td>
          <td>produkt 2</td>
          ${columns.map((c) => c.randomData).join('\n\t  ')}
        </tr>
      </table>
    </div>
    
  )
} `;

  const handleEditLabelClick = () => {
    if (input.trim() === '') return;
    setLabelName(input);
    setInput('');
  };

  const handleAddColumnClick = () => {
    if (columnName.trim() === '') return;
    setColumns([
      ...columns,
      {
        columnName: `<th>${columnName}</th>`,
        randomData: `<td>${Math.round(Math.random() * 100)}</td>`,
      },
    ]);
    setColumnName('');
  };

  return (
    <div>
      <label htmlFor='column'>New column: </label>
      <input
        type='text'
        id='column'
        name='column'
        value={columnName}
        onChange={(e) => {
          setColumnName(e.target.value);
        }}
      />
      <label htmlFor='label'>New label: </label>
      <input
        type='text'
        id='label'
        name='label'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleAddColumnClick}>Add column</button>
      <button onClick={handleEditLabelClick}>Edit label</button>
      <br />
      <br />
      <AppPreview code={code} />
    </div>
  );
};

export default App;
