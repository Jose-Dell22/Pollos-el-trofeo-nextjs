import Image from 'next/image';
import styles from '../../../MainProducts.module.scss';
import { getProducts } from 'app/services/shopify/products';

export const MainProducts = async () => {
    const products: ProductType[] = await getProducts();
    return (
        <section className={styles.MainProducts}>
            <h3>🌟 Previsualización de nuestros productos 🌟</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product) => {
                    const imageSrc = product.image;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
