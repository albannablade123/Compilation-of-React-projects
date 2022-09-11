import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount)
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="">
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <Button label="+Add" onClick={submitHandler} />
      {!amountIsValid && <p>Please enter a valid number (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
