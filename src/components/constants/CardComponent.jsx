import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cart";



const Card = ({item, name, image}) => {

    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch ();
    
    const onClickAdd = () => {
        const item = {
            name, 
            image
        }
        dispatch(addItem(item))
    }


    

    const minusHandler = () => {
        if (amount == 0) return
        setAmount(amount - 1)
    }
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    

    
    return (
        <div className="pizzas-cards">
            <div className="pizzas-cards">
                {item.map((val, idx) => (
                    <div  key={idx}>
                        <div className="cards-post ">
                            <img className="card-img" src={val.image}></img>
                            <p className="pizza-name">{val.name}</p>
                            <p className="model">{val.ingrediants}</p>
                            <div className="pizza-size">
                                <p className="size-of-pizza">{val.size1}</p>
                                <p className="size-of-pizza">{val.size2}</p>
                                <p className="size-of-pizza">{val.size3}</p>
                            </div>
                            <p className="ingredients">{val.addIngredients}</p>
                            <div className="card-price">
                                <p className="price">{val.price}<b>$</b></p>
                                <div className="card-counter">
                                    <button className="handler minus" onClick={minusHandler}>-</button>
                                    <div className="amount">{amount}</div>
                                    <button className="handler plus" onClick={plusHandler}>+</button>
                                </div>
                            </div>
                            <button className="cartButton" onClick={onClickAdd}>{val.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>    
    )
}

export default Card