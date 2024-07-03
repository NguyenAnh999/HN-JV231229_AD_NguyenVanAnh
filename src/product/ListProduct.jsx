import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Product";
import ProductItem from "./ProductItem";
export default function ListProduct() {

  const { products,handleAdd} = useContext(ProductContext);
  return (
    <>
      <main className="px-12">
        <h3 className="text-center uppercase font-semibold py-6">
          {" "}
          Danh sach san pham
        </h3>
        <div  className="grid-cols-5 grid">
          {products.map((pro) => ( 
            <ProductItem
              handleAdd={handleAdd}
              id={pro.id}
              key={pro.id}
              src={pro.img}
              title={pro.productName}
              description={pro.price}
            />
          ))}
        </div>
      </main>
      

    </>
  );

}
