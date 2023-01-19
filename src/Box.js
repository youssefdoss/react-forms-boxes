import React from "react";

/** Box: Presents a colored box
 *
 * Props:
 * - backgroundColor
 * - width
 * - height
 * - removeBox (function)
 * - id
 *
 * BoxList -> Box
 */

function Box({ width = 100, height = 100, backgroundColor = 'blue', removeBox, id }) {

  /** Remove selected box */
  function handleRemoveBox() {
    removeBox(id);
  }

  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  }

  return (
    <div className="Box">
      <div
        className="Box-box"
        style={boxStyle}
      />
      <button
        className="Box-removeButton"
        onClick={handleRemoveBox}>
        X
      </button>
    </div>
  )
}

export default Box;