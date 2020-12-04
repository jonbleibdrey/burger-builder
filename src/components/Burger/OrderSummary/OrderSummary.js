import React from 'react'
import Aux from '../../../hoc/Aux'

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
            </Aux>
        </div>
    )
}

export default OrderSummary