import styles from "./styles.module.scss";

interface TagProps {
  value: string;
}

export function Tag({ value }: TagProps) {
  let username = "";

  if (typeof window !== "undefined") {
    username = localStorage.getItem("username") || "username";
  }

  return (
    <header className={styles.containerTag}>
      <p>
        {value} <strong> {username}!</strong>
      </p>
    </header>
  );
}
