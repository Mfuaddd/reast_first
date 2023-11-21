import React from 'react'
import "./index.css"
import Cards from '../Cards'

function Products() {
  return (
    <div className='products'>
        <div className="container">
          <h2>Products</h2>
            <div className="wrapper">
                <Cards></Cards>
            </div>
        </div>
    
    </div>
  )
}

export default Products