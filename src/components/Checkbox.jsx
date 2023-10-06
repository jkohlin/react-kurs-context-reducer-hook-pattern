export default function Checkbox(props) {
  const handleClick = () => {
    props.setter(!props.value, "checkbox");
  };
  return (
    <label className="input">
      {props.label}
      <input type="checkbox" checked={props.value} onChange={props.setter} />
    </label>
  );
}
