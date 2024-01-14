import "./Button.css";

export const Button = ({innerText, onClick, className, id, activeControl }) => {

  const isActiveControl = id === activeControl ? "active-control-button" : "";

  return (
    <div
      id={id}
      className={`button ${className} ${isActiveControl}`}
      onClick={() => onClick(id)}
    >
      {innerText}
    </div>
  )
}