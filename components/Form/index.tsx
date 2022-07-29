import { SyntheticEvent } from "react";
import { TextField } from "../TextField";
import { Button } from "../Button";

import styles from "./styles.module.scss";

interface Button {
  value: string;
  type: "button" | "submit";
}

interface Label {
  htmlFor: string;
  value: string;
}

interface Input {
  type: string;
  placeholder: string;
  id: string;
}

interface TextField {
  label: Label;
  input: Input;
}

interface FormProps {
  textField: TextField;
  button: Button;
}

export function Form({ textField, button }: FormProps) {
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit}>
        <TextField
          label={{
            htmlFor: textField.label.htmlFor,
            value: textField.label.value,
          }}
          input={{
            type: textField.input.type,
            placeholder: textField.input.placeholder,
            id: textField.input.id,
          }}
        />

        <Button value={button.value} type={button.type} />
      </form>
    </div>
  );
}
