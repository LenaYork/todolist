import "./Button.css";

export const Button = ({innerText, onClick, className, id, activeControl }) => {

  let isActiveControl = id === activeControl ? "active-control-button" : "";
  id === "done" && (isActiveControl += " done-button");

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