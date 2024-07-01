import { env } from '../../config/env';
import { shopifyUrls } from './urls';

export const getProducts = async (): Promise<ProductType[]> => {  
    try {
        const response = await fetch(shopifyUrls.products.all, {
            method: "GET",
            headers: new Headers({
                "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
            }),
            next: {
                revalidate: 10
            }
        });
        
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
        return []; // Return an empty array in case of an error
    }
};
