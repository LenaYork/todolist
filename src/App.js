import  { Button } from './components/Button/Button';
import  { Edit } from './components/Edit/Edit';
import  { Input } from './components/Input/Input';
import  { Todo } from './components/Todo/Todo';
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

    const onRadioClick = (activeId) => {
        let newArr = [...todoArr];
        newArr = newArr.map(elem => {
            if (elem.id === activeId) {
                return {
                    "text" : elem.text,
                    "id" : elem.id,
                    "isDone" : !elem.isDone
                }
            } else return elem;
        })
        setTodoArr(newArr);
    }

    const onCrossClick = (clickedId) => {
        let newArr = [...todoArr];
        newArr = newArr.filter(elem => elem.id !== clickedId)
        setTodoArr(newArr);
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

    const doubleClickHandler = (id) => {
        setEditId(id);
    }

    const onSaveClick = (text) => {
        let newArr = [...todoArr];
        newArr = newArr.map(elem => {
            if (elem.id === editId) {
                let newElem = {...elem}
                newElem.text = text
                return newElem;
            } else return elem;
        })
        setTodoArr(newArr);
        setEditId("");
    }

    const onCancelClick = () => {
        setEditId("");
    }

    const renderList = () => {
        let list = [];
        switch(true) {
            case activeControl === "all": 
                list = [...todoArr]
                break;

            case activeControl === "done": 
                list = [...todoArr.filter(elem => elem.isDone )]
                break;

            case activeControl === "pending": 
                list = [...todoArr.filter(elem => !elem.isDone )]
                break;

            default:
                list = [...todoArr];
                break;
        }

        localStorage.setItem("userList", JSON.stringify(list));
        
        return(
            <div className="items-area">
                    {list.map(elem  => {
                        return (
                            elem.id === editId ? 
                            <Edit 
                                key={elem.id}
                                onSaveClick={onSaveClick}
                                onCancelClick={onCancelClick}
                                innerText={elem.text}
                            />
                            :
                            <Todo 
                                isActiveTodo={elem.isDone}
                                onRadioClick={onRadioClick}
                                onCrossClick={onCrossClick}
                                innerText={elem.text}
                                id={elem.id}
                                key={elem.id}
                                onDoubleClick={() => {doubleClickHandler(elem.id)}}
                            /> 
                        )
                    })}
            </div>
        )
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

                    {renderList()}
                </div>
        </div>
    </div>
    );
}

export default App;
