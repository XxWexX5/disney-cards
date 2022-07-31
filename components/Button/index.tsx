import styles from "./styles.module.scss";

interface ButtonProps {
  value: string;
  type: "button" | "submit";
  handleMoreCarts?: any;
  randomProperty?: any;
}

export function Button({
  value,
  type,
  handleMoreCarts,
  randomProperty,
}: ButtonProps) {
  return (
    <div className={styles.containerButton}>
      {handleMoreCarts && (
        <button type={type} onClick={handleMoreCarts}>
          {value}
        </button>
      )}

      {randomProperty && (
        <button type={type} onClick={randomProperty}>
          {value}
        </button>
      )}
    </div>
  );
}
