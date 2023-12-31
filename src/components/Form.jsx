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
        <p>Nån får gärna se vad jag gjort för fel med checkboxen :D </p>
        <Checkbox
          value={newsletter}
          setter={newsletter.setter}
          label="Nyhetsbrev"
        />
      </div>
    </>
  );
}
