/**
 * PROGRAM 10 — Change Page Color
 *
 * Two approaches to change the background color of a content area:
 *
 * Button 1 — "Change Color" (toggle between 2 colors)
 *   Toggles the background between green and blue on each click.
 *
 * Button 2 — "Change Color From Array" (cycle through array)
 *   Cycles through a predefined colors array on each click.
 *   Wraps back to the start after the last color (using modulo %).
 *
 * Concepts: useState, ternary toggle, array cycling with modulo, inline styles
 */
import { useState } from 'react';

const colorsArray = ['red', 'green', 'orange', 'yellow', 'blue'];

const ColorChangeComponent = () => {
  const [color, setColor] = useState('green');
  const [colorId, setColorId] = useState(0);
  
  
  const handleColorChange = () => {
    setColor(prev => prev === 'green' ? 'blue' : 'green');
  }
  
  const handleColorFromArray = () => {
    setColorId(prevIdx => {
      const nextIdx = (prevIdx + 1) % colorsArray.length;
      setColor(colorsArray[nextIdx])
      return nextIdx;
    })
  }
  
  return (
    <div style={{ 'backgroundColor': color, 'padding': '12px'}}>
      <p style={{ 'fontWeight': 'bold', 'color': 'white', 'padding': '4px'}}>Color is : {color}</p>
      <button style={{padding: '8px 12px', 'marginRight': '16px'}}
       onClick={handleColorChange}
      >
        Change Color
      </button>
      <button style={{padding: '8px 12px'}}
       onClick={handleColorFromArray}
      >
        Change Color From Array
      </button>
    </div>
    )
  
};

export default ColorChangeComponent;