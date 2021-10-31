import React from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "../../redux/Products/productslices";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {

  const products  = useSelector(getProductsSelector);

  return (
    <div>
      <h2>Product List</h2>

        {products.map((product) => {
         return <div key={product.id}>
            <div>{`${product.title}: ${product.price}`}</div>
          </div>
        })}
      <button>
        Add Product
      </button>
    </div>
  )
}

export default ProductList