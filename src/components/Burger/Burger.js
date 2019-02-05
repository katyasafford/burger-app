import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // let's transform ingrediets object into an array
  // array will contain as many elements as we have defined in state
  // i.e. state.ingredinets = {cheese: 2} becomes array of 2 elements
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingrKey => {
      return [...Array(props.ingredients[ingrKey])].map((el, i) => {
        return <BurgerIngredient key={ingrKey + i} type={ingrKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return(
    <div className={classes.Burger}>
       <BurgerIngredient type='bread-top' />
       {transformedIngredients}
       <BurgerIngredient type='bread-bottom' />

    </div>
  );
}

export default withRouter(burger);
