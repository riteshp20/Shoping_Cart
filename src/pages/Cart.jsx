import { useSelector } from "react-redux";
import {useState ,useEffect} from 'react';
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0));
  },[cart])

  return (
    <div className="bg-gray-100">
        {
          cart.length > 0 ? 
          (
            <div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] bg-white">
              <div className="flex flex-col gap-5 mt-5 ml-5 max-w-3xl">
                {
                  cart.map( (item,index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                  })
                }
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="text-green-600 font-semibold ">Your Cart</div>
                <div className="text-5xl font-bold text-green-600">Summary</div>
                <p>
                  <span>Total items : {cart.length}</span>
                </p>
              

              <div>
                <p>Total Amount : <span className="font-bold"> ${totalAmount}</span></p>
              </div>

              <button className="bg-green-600 text-white font-semibold max-w-3xl py-2 rounded-lg hover:scale-110 transition duration-300 p-auto ">
                CheckOut Now
              </button>
              </div>
            </div>
          ) 
          :
          (
            <div className="flex flex-col justify-center items-center gap-4 h-[90vh]">
              <h2 className="font-semibold">Cart Empty</h2>
              <Link to="/">
                <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:scale-110 transition duration-300  ">
                  Shop Now
                </button>
              </Link>
            </div>
          )
        }
    </div>
  )
};

export default Cart;