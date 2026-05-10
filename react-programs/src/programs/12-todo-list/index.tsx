/**
 * PROGRAM 12 — Todo List
 *
 * Build a todo list app with full CRUD.
 *
 * Requirements:
 *   - Add a new todo via a text input and an "Add" button
 *   - Each todo shows its text plus Edit and Delete buttons
 *   - Clicking Edit makes that todo's text editable inline with a Save button
 *   - Clicking Delete removes the todo
 *   - A checkbox marks a todo as complete (strike-through the text)
 *   - Show the count of remaining (incomplete) todos
 */

import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

function TodoList() {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  // for edit
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if(!text.trim()) return;
    
    setTodos(prev => [
     ...prev,
     {
       id: Date.now(),
       title: text.trim(),
       done: false
     }
    ]);
    setText("");
  }
  
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const startEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  }
  
  const saveEdit = (id: number) => {
    if(!editText.trim()) return;
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? {...todo, title: editText.trim() } : todo)
    );
    setEditId(null);
    setEditText('')
  }

  // for checkbox
  const toggleDone = (id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? {...todo, done: !todo.done } : todo 
    ))
  }
  
  
  return (
    <div style={{ maxWidth: '300px'}}>
      <h2>Todo List</h2>
      <div style={{'marginBottom' : '10px'}}>
        <input 
          value={text}
          placeholder="Add a todo..."
          onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={addTodo}
          style={{ 'marginLeft' : '5px'}}
        >
          Add
        </button>
      </div>
      
      {todos.length === 0 && <p>No items yet</p>}
      
      <p>Remaining todos: {todos.filter(todo => !todo.done).length} / {todos.length}</p>
      <ul>
        {
          todos.map((todo) => (
             <li key={todo.id} 
                style={{ 'marginTop' : '8px', 'display': 'flex', 'gap': '12px'}}>
                
                {
                 editId == todo.id ?
                  (<>
                    <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                  </>):
                  (<>
                    <input type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleDone(todo.id)}
                    />
                    <span style={{ 'textDecoration':  todo.done ? 'line-through' : 'none'}}
                     >{todo.title}</span>
                    <button
                      onClick={() => startEdit(todo)}
                    >Edit Todo</button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                    >Delete Todo</button>
                  </>)
                }
                
            </li>
          ))
        }
      </ul>
    </div>);
}


export default TodoList;
