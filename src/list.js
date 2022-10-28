 import React from "react";
 import axios from "axios";
 import {useState, useEffect} from "react"
 import {Link} from "react-router-dom"
 function List(){
const [products,setproducts]=useState([]);

useEffect(()=>{
    getProduct();
})

async function getProduct(){
    try{
        const product= await axios.get("http://localhost:8000/grocery");
        setproducts(product.data);
console.log(product.data);
    }catch(error){
        console.log("something wrong")

    }
}

 const onDelete= async id=>{
try{
    await axios.delete(`http://localhost:8000/grocery/${id}`)

}
catch(error){
console.log("something wrong");
}
}
return(
    <>
            <table class="list" id="employeeList">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>image url</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    products.map((item,i)=>{
                        return(
                            <tr key={item.id}>
                        
                        <td>{item.product_name}</td>
                        <td>{item.Quantity}</td>
                        <td>{item.url}</td>
                        <td><span><button><Link to={`/View/${item.id}`}>view</Link></button></span> <span><button onClick={()=>onDelete(item.id)}>Delete</button></span></td>
                    </tr>
                        )
                    })
                 }
                </tbody>
            </table>
        

    </>
)

 }
 export default List;