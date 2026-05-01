import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order'

const showOrders = (props) => {
  let cartTotal = 0;
  props.orders.forEach(el => {
    cartTotal += Number.parseFloat(el.price)
  });
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='total-sum'>Total: {new Intl.NumberFormat().format(cartTotal)}$</p>
  </div>)
} 

const showNothing = () => {
  return (<div className='empty'>
    <h2>No items in cart</h2>
  </div>)
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contact us</li>
          <li>Account</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen(prev => !prev)}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()
            }
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
