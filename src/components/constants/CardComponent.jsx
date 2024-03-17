import React from "react"
import { useState, useContext } from "react";
import { ShopContext } from "../../App";


const Card = ({item}) => {

    const {setCart} = useContext(ShopContext)
    const [amount, setAmount] = useState(0);
    const  {image} = useState ('')
    console.log (image)

    

    const minusHandler = () => {
        if (amount == 0) return
        setAmount(amount - 1)
    }
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    const addToCartHandler = () => {
        setCart((prev) => {
            return {
                ...prev,
                image: prev.image + image,
                itemsAmount: prev.itemsAmount + amount,
                totalPrice: prev.totalPrice +  val.price, 
            }

        })
        setAmount (0)
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
                            <button className="cartButton" onClick={addToCartHandler}>{val.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>    
    )
}

export default Card