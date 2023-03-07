import React from 'react';
import './Navbar.scss';
const Navbar = () => {
  const navItems1 = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
  const navItems2 = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
  return (
    <nav>
      <div className='first_navbar'>
        <h3>All the men's product</h3>
      </div>
      <div>
        <ul className='second_navbar'>
          {
            navItems1.map((navItem)=>{
              return <li key={navItem}>{navItem}</li>
            })
          }
        </ul>
      </div>
      <div>
        <ul className='second_navbar'>
          {
            navItems2.map((navItem)=>{
              return <li key={navItem}>{navItem}</li>
            })
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar