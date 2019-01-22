import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  // transform object of ingredients into array we can loop through
  // and transform into <li> items
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span className={classes.IngredientName}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    });

  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>

      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>

      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
