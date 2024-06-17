import React, {useState} from 'react'
import axios from 'axios'
const ProductForm = () => {
    const [product,setProduct] =useState({name:"",description:"", price: "", category: ""});
    const producthandler = (e)=>{
       const {name, value} = e.target;
       setProduct({...product, [name]:value})
    }
    
    const insertProduct = async() => {
        try{
            const response = await axios.post('http://localhost:5000/addproduct',product);
            console.log(response.data)
        } catch (error){
            console.log(error)
        }
    }


  return (
    <div>
       <form onSubmit={insertProduct}>
       <h3 className='mt-3'>Add Product</h3>
  <div className="mb-3 mt-3">
    <input type="text" className="form-control" name='name' value= {product.name} onChange={producthandler} placeholder='Enter Product Name'/>
  </div>
  <div className="mb-3 mt-3">
    <input type="text" className="form-control" name='description' value={product.description} onChange={producthandler}  placeholder='Enter Product Description'/>
  </div>
  <div className="mb-3 mt-3">
    <input type="text" className="form-control" name='price' value={product.price} onChange={producthandler}  placeholder='Enter Product Price'/>
  </div>
  <div className="mb-3 mt-3">
    <input type="text" className="form-control" name='category' value={product.category} onChange={producthandler}  placeholder='Enter Product Category'/>
  </div>


  <button type="submit"  style={{width:'250px', background:'rgb(3, 16, 78)',color:'white'}} className="btn ">Submit</button>
</form>
    </div>
  )
}

export default ProductForm