export default function Checkbox(props) {
  return (
    <label className="block">
      {props.label}?:
      <input type="checkbox" checked={props.value} onChange={props.setter} />
    </label>
  );
}
