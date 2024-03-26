import { useState } from 'react';

export const useToggleButtons = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
      }
      const decreaseCount = () => {
         setCount(count -1);
      }
      const setToZero = () => {
        setCount(0);
      }
    
      return [increaseCount, decreaseCount, setToZero, count];
}