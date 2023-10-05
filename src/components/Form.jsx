import Card from "./Card";
import Checkbox from "./Checkbox";
import Input from "./Input";
import useStateReducer from "./useStateReducer";

export default function Form(props) {
  const { name, email, newsletter } = useStateReducer();
  console.log("Form: state.name", name);

  /* 
  Genom att flytta ut reducern till en hook, 
  blir komponenten lättare att överskåda
  */
  return (
    <>
      <div>
        <Input
          value={name.value}
          setter={name.setter}
          type="text"
          label="Namn"
        />
        <Input
          value={email.value}
          setter={email.setter}
          type="email"
          label="Epost"
        />
        <Checkbox
          value={newsletter}
          setter={newsletter.setter}
          label="Nyhetsbrev"
        />
      </div>
      <Card />
    </>
  );
}
