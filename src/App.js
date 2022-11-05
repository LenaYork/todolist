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
        </div>
    </div>
    );
}

export default App;
