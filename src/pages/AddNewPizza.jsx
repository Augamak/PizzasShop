import React from "react"
import BackButton from "../components/BackButton"

const AddNewPizza = () => {

    return (
        <h1 className="your-pizza">
            <p className="your-pizza-text">This is your pizza!!</p>
            <div className="back-button">
                <BackButton />
            </div>
          
        </h1>    
    )
}

export default AddNewPizza