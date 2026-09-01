import { productRegistry, type MetherProduct } from "@/lib/products/registry";
import styles from "./MetherProducts.module.css";

const statusLabels: Record<MetherProduct["status"], string> = {
  core: "CORE",
  active: "CANLI",
  prototype: "GELİŞİYOR",
  future: "YAKINDA",
};

export default function MetherProducts() {
  return (
    <section id="products" className={styles.section} aria-labelledby="products-title">
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.content}>
        <header className={styles.header}>
          <p>METHER PRODUCTS</p>
          <h2 id="products-title">Tek çekirdek.<br /><span>Çoklu ürün ekosistemi.</span></h2>
          <div>Her ürün ortak METHER mimarisi üzerinde büyür. Yeni ürünler, ana deneyimi yeniden kurmadan bu ekosisteme bağlanır.</div>
        </header>

        <div className={styles.products}>
          {productRegistry.map((product) => {
            const content = (
              <>
                <div className={styles.cardTop}>
                  <span className={styles.status}>{statusLabels[product.status]}</span>
                  {product.external && <span className={styles.external} aria-hidden="true">↗</span>}
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </>
            );

            return product.href ? (
              <a key={product.id} className={styles.card} data-accent={product.accent} href={product.href} target={product.external ? "_blank" : undefined} rel={product.external ? "noopener noreferrer" : undefined} aria-label={`${product.name} — Legal Technology`}>
                {content}
              </a>
            ) : (
              <article key={product.id} className={styles.card} data-accent={product.accent}>{content}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
