import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cart";



const Card = ({card}) => {

    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch ();
    
    const onClickAdd = () => {
        const items = {
             
           
        }
        dispatch(addItem(items))
        setAmount (0)
    }


    

    const minusHandler = () => {
        if (amount == 0) return
        setAmount(amount - 1)
    }
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    

    
    return (
        
        <div>
            <div className="cards-post ">
                <img className="card-img" src={card.image}></img>
                <p className="pizza-name">{card.name}</p>
                <p className="model">{card.ingrediants}</p>
                <div className="pizza-size">
                    <p className="size-of-pizza">{card.size1}</p>
                    <p className="size-of-pizza">{card.size2}</p>
                    <p className="size-of-pizza">{card.size3}</p>
                </div>
                <p className="ingredients">{card.addIngredients}</p>
                <div className="card-price">
                    <p className="price">{card.price}<b>$</b></p>
                    <div className="card-counter">
                        <button className="handler minus" onClick={minusHandler}>-</button>
                        <div className="amount">{amount}</div>
                        <button className="handler plus" onClick={plusHandler}>+</button>
                    </div>
                </div>
                <button className="cartButton" onClick={onClickAdd}>{card.button}</button>
            </div>
        </div>
             
    )
}

export default Card