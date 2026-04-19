import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contact us</li>
              <li>Account</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
