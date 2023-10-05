import Text from "./Text";
import useStateReducer from "./useStateReducer";

export default function Card(props) {
  const { name } = useStateReducer();
  console.log("Card:name", name);

  return (
    <div>
      <Text text={name.value} />
    </div>
  );
}
