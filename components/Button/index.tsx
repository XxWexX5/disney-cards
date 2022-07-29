import styles from "./styles.module.scss";

interface Button {
  value: string;
}

interface ButtonProps {
  button: Button;
}

export function Button({ button }: ButtonProps) {
  return (
    <div className={styles.containerButton}>
      <button type="button">{button.value}</button>
    </div>
  );
}
