export default function Input(props) {
  return (
    <>
      <label className="input">
        {props.label}:
        <input
          type={props.type}
          defaultValue={props.value}
          onChange={(e) => props.setter(e.target.value, "input" + props.label)}
        />
      </label>
    </>
  );
}
