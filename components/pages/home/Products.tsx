import { ProductCard, productsDetail } from "./parts/product-card";

const Products = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="flex items-center w-full">
        <div className="w-full">
          {productsDetail.map((item, index) => (
            <ProductCard key={index}>{item.title}</ProductCard>
          ))}
        </div>

        <div className="w-full">m</div>
      </div>
    </section>
  );
};

export default Products;
