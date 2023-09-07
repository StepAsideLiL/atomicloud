"use client";

import { ProductCard, productsDetail } from "./parts/product-card";

const Products = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center w-full gap-10">
          <div className="w-full space-y-20">
            {productsDetail.map((item) => (
              <ProductCard key={item.id} id={item.id}>
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-xl">{item.description}</p>
              </ProductCard>
            ))}
          </div>

          <div className="sticky top-0 w-full">
            <div className="relative w-full h-full aspect-square">
              {productsDetail.map((item) => (
                <item.image key={item.id} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
