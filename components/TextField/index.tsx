import styles from "./styles.module.scss";

interface Label {
  htmlFor: string;
  value: string;
}

interface Input {
  type: string;
  placeholder: string;
  id: string;
}

interface TextFieldProps {
  label: Label;
  input: Input;
}

export function TextField({ label, input }: TextFieldProps) {
  return (
    <div className={styles.containerTextField}>
      <label htmlFor={label.htmlFor}>{label.value}</label>

      <input type={input.type} placeholder={input.placeholder} id={input.id} />
    </div>
  );
}
