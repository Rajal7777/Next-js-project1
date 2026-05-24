import ProductList from "@/components/ProductList";


//searchParams returns -> searchParams = {category: "dresses"}
const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;  //dresses


  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductPage;
