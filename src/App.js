import  { Button } from './components/Button/Button';
import  { Edit } from './components/Edit/Edit';
import  { Input } from './components/Input/Input';
import  { Todo } from './components/Input/Input';
import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
    const [ inputText, setInputText ] = useState("");
    const [ todoArr, setTodoArr ] = useState(JSON.parse(localStorage.getItem("userList")) ?? []);
    const [ activeControl, setActiveControl ] = useState("all");
    const [ lengthTitle, setLengthTitle ] = useState("all");
    const [ editId, setEditId ] = useState("");

    const inputOnChange = (event) => {
        setInputText(event.target.value);
    }

    const addItem = (text) => {
        if (text) {
            let newArr = [...todoArr];
            newArr.push({
                "text" : text,
                "id" : todoArr.length ? todoArr[todoArr.length-1].id + 1 :  1,
                "isDone" : false
            })
            setTodoArr(newArr);
        } else alert("Todo item cannot be empty");
        setInputText("");
    }

    const clearButton = () => {
        if (todoArr.length > 0) {
            let isConfirmed = window.confirm("Are you sure you want to delete ALL the items in the list?");
            if(isConfirmed) {
                setTodoArr([]);
            }
        } else alert("There is nothing to delete")
    }

    const activeButtonHandler = (id) => {
        setActiveControl(id);        
        setLengthTitle(id) 
    }

    return (
    <div className="app">
        <h1 className="app-title">TODO LIST</h1>
        <div className="controls">
            <div className="input-area">
                <Input 
                    onChange={inputOnChange}
                    value={inputText}
                />
                <Button 
                    innerText="add"
                    className="add-button"
                    onClick={() => addItem(inputText)}    
                />
            </div>

            <div className="results-area">
                    <div className="buttons-container">
                        <div className="total-number-container">
                            <div>{lengthTitle}</div>
                            <div className="total-number">0</div>
                        </div>
                        <Button 
                            innerText="all"
                            id="all"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="done"
                            id="done"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="pending"
                            id="pending"
                            className="control-button"
                            activeControl={activeControl}
                            onClick={activeButtonHandler}
                        />
                        <Button 
                            innerText="clear"
                            id="clear"
                            className="clear-button"
                            onClick={clearButton}
                        />
                    </div>

                    {/* {renderList()} */}
                </div>
        </div>
    </div>
    );
}

export default App;
