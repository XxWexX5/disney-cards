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
  username: string;
  setUsername: any;
}

export function TextField({
  label,
  input,
  username,
  setUsername,
}: TextFieldProps) {
  return (
    <div className={styles.containerTextField}>
      <label htmlFor={label.htmlFor}>{label.value}</label>

      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </div>
  );
}
