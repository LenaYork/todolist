import "./Edit.css";

import React, { useState } from 'react';

export const Edit = ({onSaveClick, onCancelClick, innerText}) => {

  const [activeText, setActiveText] = useState(innerText);

  const onChangeHandler = (event) => {
    setActiveText(event.target.value)
  }

  const handleEditInputKeyUp = (event) => {
    if (event.key === "Enter") {
      setActiveText(event.target.value);
      onSaveClick(activeText)
    }
  }

  return (
    <div className="edit">
      <input
        type="text"
        className="edit-input"
        value={activeText}
        onChange={onChangeHandler}
        onKeyUp={handleEditInputKeyUp}
        maxLength={90}
      />
      <div
        className="save-edit-box"
        onClick={() => onSaveClick(activeText)}
      />
      <div
        className="cancel-edit-box"
        onClick={onCancelClick}
      />
    </div>
  )
}