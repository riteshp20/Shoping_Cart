import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';



const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Remove From Cart");
  }

  return (

    <div className=''>
          <div className='flex max-w-[700px] justify-center mx-auto '>
      
            <div className='m-5 w-[250px] h-[220px] '>
              <img src={item.image} alt="" className='w-full h-full '></img>
            </div>

            <div className='flex flex-col gap-7'>
              <h1 className='font-semibold text-xl'>{item.title}</h1>
              <p className='w- text-gray-400 font-normal  text-left'
              >{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
              <div className='flex justify-between'>
                <p className='text-green-600 font-semibold'>${item.price}</p>
                <div className='flex w-[30px] h-[30px] bg-red-400 rounded-full justify-center items-center cursor-pointer hover:scale-110'
                onClick={removeFromCart}>
                  <FcDeleteDatabase/>
                </div>
              </div>

            </div>




              
            
          </div>
          <div className='h-[1px] bg-slate-900 w-full'></div>
    </div>

  )
};

export default CartItem;