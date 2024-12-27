import {React, useState } from 'react'
import { Data } from '../Data/Data'
import { addItem,delItem } from '../Redux/Actions/action'
import { useParams } from 'react-router-dom'
import {usedispatch} from 'react-redux'


const foodDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const foodid = useParams ();
    
    const food = fooddetail[0];
    console.log(food);

    const dispatch = usedispatch ()

    const handleCart = (food) => {
        if (cartBtn === "Add to Cart") {
            dispatch (addItem(food));
            setCartBtn("Remove from Cart");
        }
        else {
            dispatch (delItem(food));
            setCartBtn("Add to Cart");
        }

    }



  return (
    <div>
        <div>
            <img src={food.Image} height="400px" alt="" />
        </div>
        <div>{food.Name}
        <h3> {food.Price} </h3>
        <button onClick={() =>handleCart(food)}>{cartBtn}</button>
        </div>
        


    </div>
  )
}

export default foodDetailsconst fooddetail = Data.filter(x => x.id == foodid.id)