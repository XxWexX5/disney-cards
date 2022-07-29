import Image from "next/image";

import { ShapeFooterCards } from "../Icons/ShapeFooterCards";

import styles from "./styles.module.scss";

interface CardProps {
  mainTitle: string;
  number: string;
  title: string;
  color: string;
}

export function Card({ mainTitle, number, title, color }: CardProps) {
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
            <Image
              src="https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png"
              layout="fill"
            />

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
