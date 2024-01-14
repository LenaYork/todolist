import "./Input.css";

export const Input = ({ onChange, value, handleInputKeyUp }) => {

  return (
    <input
      className="input"
      id="input"
      value={value}
      onChange={onChange}
      onKeyUp={handleInputKeyUp}
      maxLength={90}
    >
    </input>
  )
}