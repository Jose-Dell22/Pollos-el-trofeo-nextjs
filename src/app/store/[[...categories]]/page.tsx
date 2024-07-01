import { ProductsWrapper } from "app/app/Components/store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import { getCollections } from "app/services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[]
    searchParams?: string
  }
}

export default async function Category(props: CategoryProps) {
  let products = await getProducts();

  const { categories } = props.params;

  return (
    <ProductsWrapper products={products} />
  );
}
