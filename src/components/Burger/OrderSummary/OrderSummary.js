import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
    })
    return (
        <div>
            <Aux>
                <h3> your order</h3>
                <p> a delecious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
            </Aux>
        </div>
    )
}

export default OrderSummary