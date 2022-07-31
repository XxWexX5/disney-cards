import styles from "./styles.module.scss";

interface ButtonProps {
  value: string;
  type: "button" | "submit";
  handleMoreCarts?: any;
  handleRandomProperty?: any;
}

export function Button({
  value,
  type,
  handleMoreCarts,
  handleRandomProperty,
}: ButtonProps) {
  return (
    <div className={styles.containerButton}>
      {handleMoreCarts && (
        <button type={type} onClick={handleMoreCarts}>
          {value}
        </button>
      )}

      {handleRandomProperty && (
        <button type={type} onClick={handleRandomProperty}>
          {value}
        </button>
      )}

      {!handleRandomProperty && !handleMoreCarts && (
        <button type={type}>{value}</button>
      )}
    </div>
  );
}
