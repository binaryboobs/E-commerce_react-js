import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order'

const showOrders = (props) => {
  return (<div>
    {props.orders.map(el => (
      <Order key={el.id} item={el} />
    ))}
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
