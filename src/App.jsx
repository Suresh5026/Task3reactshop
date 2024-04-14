import Navbar from "./assets/Components/Navbar"
import Headers from "./assets/Components/Header"
import Section from "./assets/Components/Section"
import Footers from "./assets/Components/Footer"
import { useState } from 'react'





function App() {
  const [cartValue,setCartvalue] = useState(0);

  const addToCart = () =>{
    setCartvalue(cartValue => cartValue + 1);
  }
  
  const removeFromCart = () =>{
    if(cartValue>0){
      setCartvalue(cartValue => cartValue - 1);
    }
    
  }



  const myProduct = [
    {
      name : "B - Black",
      img : 'https://m.media-amazon.com/images/I/51gORFALQGL._SY879_.jpg',
      price1 : 300,
      price2 : 400,
      
      
    },
    {
      name : "Los - Angels",
      img : 'https://m.media-amazon.com/images/I/71jotnk9z1L._SY879_.jpg',
      price1 : 320,
      price2 : 470
    },
    {
      name : "ADROS",
      img : 'https://m.media-amazon.com/images/I/514vCNWtZDL._SX679_.jpg',
      price1 : 150,
      price2 : 200,
      sale : "sale"
    },
    {
      name : "Superior",
      img : 'https://m.media-amazon.com/images/I/51GUSSAotiL._SY879_.jpg',
      price1 : 160,
      price2 : 190,
      sale : "sale"
    },
    {
      name : "Mobile Phone",
      img : 'https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg',
      price1 : 700,
      price2 : 800,
      sale : "sale"
    },
    {
      name : "Samsung Phone",
      img : 'https://m.media-amazon.com/images/I/81317ePW5sL._SX679_.jpg',
      price1 : 17000,
      price2 : 28000,
    },
    {
      name : "Samsung Phone",
      img : 'https://m.media-amazon.com/images/I/71C8O0yT7hL._SX679_.jpg',
      price1 : 10000,
      price2 : 27000,
    },
    {
      name : "Phone",
      img : 'https://m.media-amazon.com/images/I/319aKD6suhL._SY300_SX300_.jpg',
      price1 : 10000,
      price2 : 27000,
    },
    {
      name : "shoe 1",
      img : 'https://m.media-amazon.com/images/I/719LQTTMXYL._SY695_.jpg',
      price1 : 10000,
      price2 : 27000,
      sale : "sale"
    },


    

  ]
  

  return (
    <>
      <Navbar cartValue={cartValue}/>
      <Headers />
      <div className="container1">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {myProduct.map((element)=>(
        
        <Section key={`${element.name}-${element.price1}`} product={element} addToCart={addToCart} removeFromCart={removeFromCart} />
        
      ))}
      </div>
      </div>
      <Footers />
     
    </>
  )
}

export default App
