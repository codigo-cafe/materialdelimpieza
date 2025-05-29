import React, { useContext } from 'react'
// import Link
import { Link } from 'react-router-dom'
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
// import cart context
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  // destructure item
  const { id, title, image, price, amount } = item
  
  return (
    <div>
      <div className="flex items-center border-b border-solid border-gray-200 border-opacity-75 px-4 py-4 text-sm sm:px-6">
        <div className="flex-shrink-0">
          <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
            <button onClick={() => decreaseAmount(id)} className="cursor-pointer p-2 transition-colors duration-200 focus:outline-0 hover:bg-gray-100"><span className="sr-only">reducir</span>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3 stroke-2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path>
              </svg>
            </button>
            <div className="flex flex-1 items-center justify-center font-semibold !px-0 text-heading-color text-xs">{amount}</div>
            <button onClick={() => increaseAmount(id)} className="text-heading-color cursor-pointer p-2 transition-colors duration-200 focus:outline-0 hover:bg-gray-100" title="">
              <span className="sr-only">incrementar</span>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mx-4 flex h-full w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:w-12">
          <Link to={`/producto/${id}`}>
            <img loading="lazy" className='object-contain' src={image} alt={title} />
          </Link>
        </div>
        <div>
          <Link
            to={`/producto/${id}`}
          >
            <h3 className="font-bold text-heading text-[.875rem] text-gray-800">{title}</h3>
          </Link>
          <p className="my-2.5 font-semibold text-blue-500">{`Bs. ${parseFloat(price).toFixed(2)}`}</p>
          <span className="text-xs text-body text-gray-500">{amount} unidad(es)</span>
        </div>
        <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto text-gray-800">{`Bs. ${parseFloat(price * amount).toFixed(2)}`}</span>
        <button  onClick={() => removeFromCart(id)} className="cursor-pointer flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"><span className="sr-only">close</span>
          <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CartItem
