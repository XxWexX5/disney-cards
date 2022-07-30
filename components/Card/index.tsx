import Image from "next/image";

import { ShapeFooterCards } from "../Icons/ShapeFooterCards";

import styles from "./styles.module.scss";

interface CardProps {
  mainTitle: string;
  number: number | undefined;
  title: string;
  imageUrl: string;
  color: string;
}

export function Card({ mainTitle, number, title, imageUrl, color }: CardProps) {
  return (
    <div className={styles.containerCard}>
      <header>
        <div className={styles.wrapperTextShadow}>
          <h3 className={styles.textBase}>{mainTitle}</h3>
        </div>
      </header>

      <main>
        <div className={styles.card}>
          <main>
            <Image src={imageUrl} layout="fill" />

            <div className={styles.wrapperTextShadow}>
              <p className={styles.textBase}>{number}</p>
            </div>
          </main>

          <footer>
            <ShapeFooterCards color={color} />

            <p>{title}</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
