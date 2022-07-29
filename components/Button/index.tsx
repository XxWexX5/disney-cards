import styles from "./styles.module.scss";

interface ButtonProps {
  value: string;
  type: "button" | "submit";
}

export function Button({ value, type }: ButtonProps) {
  return (
    <div className={styles.containerButton}>
      <button type={type}>{value}</button>
    </div>
  );
}
