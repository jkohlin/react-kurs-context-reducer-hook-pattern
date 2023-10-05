export default function Input(props) {
  return (
    <div>
      <label className="block">
        {props.label}:
        <input
          type={props.type}
          defaultValue={props.value}
          onChange={(e) => props.setter(e.target.value, "input" + props.label)}
        />
      </label>
    </div>
  );
}
