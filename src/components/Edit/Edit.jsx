import "./Edit.css";

import React, { useState } from 'react';

export const Edit = (props) => {

    const { onSaveClick, onCancelClick, innerText } = props;

    const [ activeText, setActiveText ] = useState(innerText);

    const onChangeHandler = (event) => {
        setActiveText(event.target.value)
    }

    return(
        <div className="edit">
            <input 
                type="text" 
                className="edit-input"
                value={activeText}
                onChange={onChangeHandler}
                />
            <div 
                className="save-edit-box" 
                onClick={() => onSaveClick(activeText)}
            >
                save
            </div>
            <div 
                className="cancel-edit-box" 
                onClick={onCancelClick}
            >
                cancel
            </div>
        </div>
    )
}