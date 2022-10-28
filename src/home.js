import React from 'react';
import List from './list';
import {useState} from 'react';
import axios from 'axios';

 function Home() {
  const [input, setinput]= useState({
    product_name: "",
    Quantity:"",
    url:""
  });
  const [status,setstatus]=useState()

  function inputFildchange(e){
    setinput({
      ...input,
      [e.target.name]:e.target.value,
       })
      }
       async function onFormsubmit(e){
        e.preventDefault();
        try{
             await axios.post("http://localhost:8000/grocery", input);
             setstatus(true)
        }
        catch(error){
            console.log("something wrong")
    
        }
    }
    if(status){
      return <Home/>
      
    }
    
  return (
    <>


    <div className='header'>
        <h4 className='header-wrap'> Grocery</h4>
    </div>
                    <form className='form-container'>

    <table>
<tr>
  <th>
    Item name
  </th>
  <th>
    Quantity
  </th>
  <th>
Image url 
 </th>
</tr>
                      <tr className='input-wrap'>
                <td className='input-wrap'>
                    

                        <input type="text" name="product_name" id="product" placeholder="product name" onChange={e=>inputFildchange(e)}/>
                    
                </td>
                <td className='input-wrap'>
                    
                        <input type="number" name="Quantity" id="Quantity" placeholder="Enter Quantity" onChange={e=>inputFildchange(e)}/>
                    
                </td>
                <td className='input-wrap'>
                    
                        <input type="text" name="url" id="url" placeholder="url" onChange={e=>inputFildchange(e)} />
                
                </td>
                
                <td className='input-wrap'>
                    <div className="form-action-buttons">
                        <input type="submit" value="ADD" onClick={e=>onFormsubmit(e)}/>
                    </div>

                </td>
        </tr>

        </table>
        </form>
        <div class="list-wrap">
          <List/>
                    </div>
    </>
  )
}

export default Home;