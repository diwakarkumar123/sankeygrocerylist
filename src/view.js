import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axiox from "axios"
function View(){
const {id}=useParams();
// console.log(id)

const [product,setproduct]=useState([]);

useEffect(()=>{
    getproduct();
}, [])
 async function getproduct(){
try{
    const product=await axiox.get(`http://localhost:8000/grocery/${id}`)
    setproduct(product.data)
    // console.log(product.data);
}
catch(error){
console.log("something wrong")
}
}
    return(

        <>
        <div className='container'>
            <div className='left-wrap'>
                  <img src={product.url} />
            </div>
            <div className='right'>
                 <div>
                 <h2>Product name</h2>
                    <span>
                        {product.product_name}
                    </span>
                 </div>
                 <div>
                    <h3>
                    Quantity   
                    </h3>
                    <span>
                    {product.Quantity}
                    </span>
                 </div>

            </div>
             
        </div>
        </>
    );
}
export default View;