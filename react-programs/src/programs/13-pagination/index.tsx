/**
 * PROGRAM 13 — Pagination
 *
 * Fetch users from the API below and display them 3 per page with Prev / Next navigation.
 *
 * API: GET https://jsonplaceholder.typicode.com/users
 *
 * Requirements:
 *   - Show a list of users (name), 3 per page
 *   - Show "Page X of Y" indicator
 *   - Disable "Prev" on the first page and "Next" on the last page (including empty data)
 *   - Show a loading state while fetching
 */

import { useEffect, useMemo, useState } from 'react'

const LIMIT = 3;
const API_URL = "https://jsonplaceholder.typicode.com/users";
    
type UserData = {
  id: number;
  name: string;
}

function Pagination() {
  
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  
  
  useEffect(() => {
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchUsers = async() => {
      try {
        // setLoading(true);
        setError('');
        
        const resp = await fetch(API_URL, {signal});
        if(!resp.ok){
          throw new Error("Failed to fetch users");
        }
        const respData = await resp.json();
        // console.log(respData);
        setData(respData);
        
      }catch(err: unknown) {
        if(err instanceof Error && err.name !== 'AbortError'){
          setError('Something went wrong')
        }
      } finally {
        setLoading(false);
      }
      
    }
    
    fetchUsers();
    
    return () => controller.abort()
  }, [])
 
 
 const totalPages = Math.ceil(data.length / LIMIT);
 
 const paginatedUsers = useMemo(() => {
   const start = (page - 1) * LIMIT;
   const end = start + LIMIT;
   return data.slice(start, end)
 }, [data, page]);
 
 function prevPage() {
   setPage(prev => Math.max(prev - 1, 1));
 }
 
 
 function nextPage() {
   setPage(prev => Math.min(prev + 1, Math.max(totalPages, 1)));
 }
 

  return (
    <div>
      <h2>users (Page {page} / {totalPages || 1})</h2>
      
      <div style={{ 'minHeight' : '120px'}}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ 'color' : 'red'}}>{error}</p>}
        {
          !loading && !error && paginatedUsers.length > 0 && (
            <ul>
              {
                paginatedUsers.map((user: UserData) => (
                   <li key={user.id}>{user.name}</li>
                ))
              }
            </ul>
          )
        }
      
      </div>
      
       <div style={{ 'marginTop' : '12px'}}>
         <button 
           disabled={page === 1 || loading}
           style={{ 'marginRight' : '12px'}}
           onClick={prevPage}>Previous</button>
         
         <button 
           disabled={page === totalPages || loading || data.length === 0}
           onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default Pagination;


