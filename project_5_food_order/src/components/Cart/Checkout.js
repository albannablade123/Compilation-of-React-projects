import React from 'react'
import classes from './Checkout.module.css'
import { useRef } from 'react'

const Checkout = (props) => {
    const nameInput = useRef();
    const streetInput = useRef();
    const postalInput = useRef();
    const cityInput = useRef();


    //Validation
    const isEmpty = value => value.trim() === '';
    const isLessThanFive = value => value.length < 5;

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostalInput = postalInput.current.value;
        const enteredCity = streetInput.current.value;



        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = !isEmpty(enteredPostalInput);

        const enteredFormIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

        if(!enteredFormIsValid){
            return 
        }
    }   

  return (
    <form className={classes.form}>
        <div className={classes.control}>
            <label htmlFor="name">name</label>
            <input type="text" id='name' ref={nameInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="street">street</label>
            <input type="text" id='street' ref={streetInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id='postal' ref={postalInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input type="text" id='postal' ref={cityInput}/>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCancel}>
                Cancel
            </button>
            <button>
                Confirm
            </button>
        </div>
    </form>
  )
}

export default Checkout