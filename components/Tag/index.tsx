import styles from "./styles.module.scss";

interface TagProps {
  value: string;
}

export function Tag({ value }: TagProps) {
  const username = localStorage.getItem("username");

  return (
    <header className={styles.containerTag}>
      <p>
        {value} <strong> {username}!</strong>
      </p>
    </header>
  );
}
