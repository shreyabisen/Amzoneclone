import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Slices/basketSlice';



function Cartitems(props) {
    const { id, image, title, description, price, rating } = props

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        const oneProduct = { id, image, title, description, price, rating }
        dispatch(removeFromCart(oneProduct))

    }
    return (
        <div className='cartItem'>
            {/* image */}
            <img
                src={image}
                alt=""
            />
            <div className='cartItemData'>
                <h1>{title}</h1>

                <h2>{price}</h2>

                <p>descrciption</p>

                <h3>   <Rating name="read-only" value={rating} readOnly /></h3>


            </div>
            <button onClick={handleRemoveItem}>Remove</button>


        </div>
    )
}

export default Cartitems