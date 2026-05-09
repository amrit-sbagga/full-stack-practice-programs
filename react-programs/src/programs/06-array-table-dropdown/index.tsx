/**
 * PROGRAM 06 — Array of Objects → Table + Dropdown
 *
 * Given the array below, render:
 *   1. A <select> dropdown listing all user names
 *   2. A table with columns: #, Name, Role, Age
 *
 * When the user selects a name from the dropdown, highlight that row in the table.
 */

import { useState } from 'react';

const USERS = [
  { id: 1, name: 'Alice', role: 'Admin', age: 28 },
  { id: 2, name: 'Bob', role: 'Editor', age: 34 },
  { id: 3, name: 'Carol', role: 'Viewer', age: 22 },
  { id: 4, name: 'Dave', role: 'Editor', age: 45 },
  { id: 5, name: 'Eve', role: 'Admin', age: 31 },
];

function ArrayTableDropdown() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log('e target Value => ', e.target.value);
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div>
        <p>Selected userName is : {selectedValue}</p>
        {/* <select onChange={(e) => handleChange(e)} value={selectedValue}>
          {USERS.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select> */}
        <select onChange={handleChange} value={selectedValue}>
          <option value="">--- Select User Name ---</option>
          {USERS.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: '16px' }}>
        <table style={{ borderCollapse: 'collapse', width: '80%' }}>
          <thead>
           <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>Id</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>Name</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>Role</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => (
               <tr key={user.id}
                 style={{ backgroundColor: selectedValue === user.name ? 'yellow' : 'white'}}>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>{user.id}</td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>{user.name}</td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>{user.role}</td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 12px' }}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ArrayTableDropdown;
