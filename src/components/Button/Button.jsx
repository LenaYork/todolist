import "./Button.css";

export const Button = (props) => {

    const {innerText, onClick, className, id, activeControl} = props;

    const isActiveControl = id === activeControl ? "active-control-button" : "";

    return(
        <div 
            id={id}
            className={`button ${className} ${isActiveControl}`}
            onClick={() => onClick(id)}
        > 
            {innerText}
        </div>
    )
}