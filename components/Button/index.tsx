import styles from "./styles.module.scss";

interface ButtonProps {
  value: string;
  type: "button" | "submit";
  handleMoreCarts?: void;
}

export function Button({ value, type, handleMoreCarts }: ButtonProps) {
  return (
    <div className={styles.containerButton}>
      <button type={type} onClick={() => handleMoreCarts}>
        {value}
      </button>
    </div>
  );
}
