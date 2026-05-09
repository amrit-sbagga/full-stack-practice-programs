import { useState } from 'react';
const useCounter = (initialCount: number) => {
    const [count, setCount] = useState(initialCount);
    
    const incrementCounter = () => {
      setCount(prev => prev + 1);
    }
    
    const decrementCounter = () => {
      setCount(prev => prev - 1);
    }
    
    const resetCounter = () => {
      setCount(0);
    }
    
    return {
      count, 
      incrementCounter, 
      decrementCounter,
      resetCounter
    }
};

export default useCounter;