import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** NewBoxForm: Form to add a box
 *
 * Props:
 * - addBox (function)
 *
 * State:
 * - formData: { width, height, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  // Allows for default values if no values passed in
  if (formData.width === '') {
    setFormData(formData => delete formData.width);
  }
  if (formData.height === '') {
    setFormData(formData => delete formData.height);
  }
  if (formData.backgroundColor === '') {
    setFormData(formData => delete formData.backgroundColor);
  }

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear inputs on submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox({ id: uuid(), ...formData});
    setFormData({
      width: '',
      height: '',
      backgroundColor: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="newBox-height">Height</label>
        <input
          id="newBox-height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="newBox-width">Width</label>
        <input
          id="newBox-width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="newBox-backgroundColor">Background Color</label>
        <input
          id="newBox-backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="newBox-submitButton">
          Add a new box!
        </button>
        </div>
    </form>
  )
}

export default NewBoxForm;