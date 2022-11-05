import "./Todo.css";

export const Todo = (props) => {

    const { isActiveTodo, innerText, onRadioClick, onCrossClick, onDoubleClick, id } = props;

    const isActive = isActiveTodo ? "active-todo" : "";

    return(
        <div className={`todo ${isActive}`} id={id}>
            <input 
                type="checkbox" 
                checked={isActive}
                onChange={() => onRadioClick(id)}
                className="todo-checkbox"
                />
            <p 
                className="todo-text" 
                onDoubleClick={onDoubleClick}
                >
                    {innerText}
            </p>
            <div 
                className="delete-todo-box" 
                onClick={() => onCrossClick(id)}
                >
                    X
            </div>
        </div>
    )
}