import React from 'react'
import Header from '../Components1/Header'
import App from '../App'
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';

function Basket(useState) {

    // const cartItem = [1, 2, 3]

    const cartItem = useSelector((state) => state.basket.items)
    const total = cartItem.reduce((total, item) => total + item.price, 0)

    const [value, setValue] = React.useState(2);
    return (
        <div>
            <Header />
            <div className='cartPage'>
                <div className='cartData'>
                    <div className='cartMeassage'>

                        {
                            cartItem.length > 0 ?
                                <h1>Numberb of items in basket</h1> :
                                <h1>Your Basket is Empty</h1>
                        }
                    </div>
                    <div className='cart'>
                        {
                            cartItem.map((item) => (
                                <cartItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    rating={item.rating}
                                />


                            ))
                        }
                    </div>
                </div>
                <div className='total'>
                    <h1>Total</h1>
                    <h1>{total}</h1>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default Basket