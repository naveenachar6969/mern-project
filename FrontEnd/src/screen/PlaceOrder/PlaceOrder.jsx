import React, { useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

  const PlaceOrder = () => {
  const navigate = useNavigate(); // Hook to navigate
  const { getTotalCartAmount, cartItem, food_list, url, token } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    let orderItems=[]
    food_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo = item;
        itemInfo.quantity=cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })
   let orderData ={
     address : data,
     items : orderItems,
     amount : getTotalCartAmount() +2
   }
   
   try{
   let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
   console.log(response.data)
     const {session_url} = response.data
     window.location.replace(session_url)
   }catch(error){
    console.log(error)
   }
  }

  useEffect (()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()==0)
    navigate('/cart')
  },[token])

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 29;
  const total = getTotalCartAmount() + deliveryFee;



  return (
    <div className="place-order">
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <input required 
              type="text"
              name="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            <input required 
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}         
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <input required 
            type="email"
            name="email"
            placeholder="Email address"
            value={data.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <input required 
            type="text"
            name="street"
            placeholder="Street"
            value={data.street}
            onChange={(e) => onChangeHandler(e)}
          />
          <div className="row">
            <input required 
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={data.zipCode}
              onChange={(e) => onChangeHandler(e)}
            />
            <input required 
              type="text"
              name="country"
              placeholder="Country"
              value={data.country}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <input required 
            type="text"
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => onChangeHandler(e)}
          />
        </form>
      </div>
      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>&#8377;{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>&#8377;{deliveryFee}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>&#8377;{total}</p>
        </div>
        <hr />
        <br />
        <button type=" submit " onClick={onSubmitHandler}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;