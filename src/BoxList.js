import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/** BoxList: Maintains list of boxes
 *
 * State:
 * - boxes (array of box components)
 *
 * BoxList -> Box
 * BoxList -> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Add a new box */
  function addBox(newBox) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** Remove a box given an id */
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className='BoxList'>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ width, height, backgroundColor, id }) => (
        <Box
          key={id}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          id={id}
          removeBox={removeBox}
        />
      ))}
    </div>
  )
}

export default BoxList;