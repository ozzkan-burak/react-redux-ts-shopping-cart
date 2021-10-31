import React, { useState } from "react";

interface ProductListProps {

}

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProducts = [
  {title: "Escape From Tarkov", price: 60, id: "eft"},
  {title: "Hunt: Showdown", price: 70, id: "hunt"},
  {title: "Hell Let Loose", price: 55, id: "hll"},
]

const ProductList: React.FC<ProductListProps> = ({}) => {

  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <div>
      <h2>Product List</h2>

        {products.map(product => {
         return <div key={product.id}>
            <div>{`${product.title}: ${product.price}`}</div>
          </div>
        })}
      <button onClick={()=> setProducts(prevProducts => [
        {
          title: "Half Life",
          price: 100,
          id:"hl" 
        }, ...prevProducts])}>
        Add Product
      </button>
    </div>
  )
}

export default ProductList