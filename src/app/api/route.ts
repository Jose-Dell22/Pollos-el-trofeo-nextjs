import { getProducts } from "app/services/shopify/products";

export async function GET() {
    try {
        const products = await getProducts();
        return new Response(JSON.stringify({ products }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return new Response(JSON.stringify({ error: 'Error fetching products' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
