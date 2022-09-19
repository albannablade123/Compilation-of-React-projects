import React from 'react'

const Checkout = () => {
  return (
    <form>
        <div>
            <label htmlFor="name">name</label>
            <input type="text" id='name' />
        </div>
        <div>
            <label htmlFor="street">street</label>
            <input type="text" id='street'/>
        </div>
        <div>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id='postal'/>
        </div>
        <div>
            <label htmlFor="city">City</label>
            <input type="text" id='postal'/>
        </div>
    </form>
  )
}

export default Checkout