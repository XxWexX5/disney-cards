import styles from "./styles.module.scss";

interface TagProps {
  value: string;
}

export function Tag({ value }: TagProps) {
  const username = "Wevison";

  return (
    <div className={styles.containerTag}>
      <p>
        {value} <strong> {username}!</strong>
      </p>
    </div>
  );
}
