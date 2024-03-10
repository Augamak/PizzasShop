import { useState, useContext } from "react";
import { ShopContext } from "../../App";



export const CardsComponent = (props) => {

    const {setCart} = useContext(ShopContext)
    const [amount, setAmount] = useState(0);
    const  {image} = useState ()
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
                totalPrice: prev.totalPrice + amount * props.product.price, 
            }

        })
        setAmount (0)
    }
    

    return (
        <div className="cards-post">
            <img className="card-img" src={props.product.image}></img>
            <p className="pizza-name">{props.product.name}</p>
            <p className="model">{props.product.ingrediants}</p>
            <div className="pizza-size">
                <p className="size-of-pizza">{props.product.size1}</p>
                <p className="size-of-pizza">{props.product.size2}</p>
                <p className="size-of-pizza">{props.product.size3}</p>
            </div>
            <p className="ingredients">{props.product.addIngredients}</p>
            <div className="card-price">
                <p className="price">{props.product.price}<b>$</b></p>
                <div className="card-counter">
                    <button className="handler minus" onClick={minusHandler}>-</button>
                    <div className="amount">{amount}</div>
                    <button className="handler plus" onClick={plusHandler}>+</button>
                </div>
            </div>
            <button className="cartButton" onClick={addToCartHandler}>{props.product.button}</button>
        </div>
        
    )
}