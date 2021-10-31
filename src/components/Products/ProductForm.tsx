import React from 'react'

interface ProductFormProps {

}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input type="text" placeholder="Product Title" name="title" />
        <input type="number" placeholder="Product Price" name="price" />
        <input type="text" placeholder="Product Id" name="id" />
        <button>Add To Products</button>
      </form> 
    </>
  )
}

export default ProductForm
