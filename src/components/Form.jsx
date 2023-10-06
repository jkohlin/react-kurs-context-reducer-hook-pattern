import Card from "./Card";
import Checkbox from "./Checkbox";
import Input from "./Input";
import useGlobalState from "./useGlobalState";

export default function Form(props) {
  const { name, email, newsletter } = useGlobalState();

  /* 
  Genom att flytta ut reducern till en hook, 
  blir komponenten lättare att överskåda
  */
  return (
    <>
      <div className="block">
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
          value={newsletter.value}
          setter={newsletter.setter}
          label="Nyhetsbrev"
        />
      </div>
    </>
  );
}
