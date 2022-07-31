import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface TagProps {
  value: string;
}

export function Tag({ value }: TagProps) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const usernameValue = localStorage.getItem("username") || "username";
    setUsername(usernameValue);
  }, []);

  if (typeof window !== "undefined") {
  }

  return (
    <header className={styles.containerTag}>
      <p>
        {value} <strong> {username}!</strong>
      </p>
    </header>
  );
}
