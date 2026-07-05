import styles from "./MetherProducts.module.css";
import { LivingLogo } from "@/components/ui/LivingLogo/LivingLogo";

const products = [
  { name: "Legal", desc: "Deadline & legal intelligence" },
  { name: "Workforce", desc: "Smart workforce operations" },
  { name: "Field", desc: "Fiber field management" },
  { name: "CFO", desc: "Finance & cost control" },
  { name: "AI Core", desc: "Shared intelligence layer" },
  { name: "Telecom", desc: "Infrastructure systems" },
];

export default function MetherProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.orbitGlow} />

      <div className={styles.left}>
        <p>METHER PRODUCTS</p>
        <h2>
          Tek çekirdek.
          <br />
          Çoklu ürün
          <br />
          ekosistemi.
        </h2>
        <span>
          Legal, Workforce, Field, CFO ve AI ürünleri aynı Mether Core üzerinde
          birbirine bağlı şekilde çalışır.
        </span>
      </div>

      <div className={styles.orbit}>
        <div className={styles.core}>
          <LivingLogo />
        </div>

        {products.map((item, index) => (
          <article
            key={item.name}
            className={styles.node}
            style={{ "--i": index } as React.CSSProperties}
          >
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
