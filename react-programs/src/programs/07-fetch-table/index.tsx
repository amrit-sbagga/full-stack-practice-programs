import { useEffect, useState } from 'react';

/**
 * PROGRAM 07 — Fetch API → Display in Table
 *
 * Fetch the list of users from the API below and display them in a table.
 *
 * API: GET https://jsonplaceholder.typicode.com/users
 * Columns to show: #, Name, Username, Email, Company
 *
 * Requirements:
 *   - Show a loading indicator while fetching
 *   - Show an error message if the request fails
 *   - Show the table once data is loaded
 */

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  }
}

const API_URL = 'https://jsonplaceholder.typicode.com/users';
function FetchTable() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');

        const respData = await fetch(API_URL, { signal});
        const resp = await respData.json();
       // console.log('resp => ', resp);
        setData(resp);
      } catch(err: unknown) {
        if(err instanceof Error && err.name !== "AbortError") {
          setError('Something went wrong');
        }
        
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {!loading && data && data.length > 0 && (
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>#</th>
              <th style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>Name</th>
              <th style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>Username</th>
              <th style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>Email</th>
               <th style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>Company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: User) => (
              <tr key={item.id}>
                <td style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>{item.id}</td>
                <td style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>{item.name}</td>
                <td style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>{item.username}</td>
                <td style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>{item.email}</td>
                <td style={{ border: '1px solid #d1d2d3', padding : '8px 12px'}}>{item.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default FetchTable;
