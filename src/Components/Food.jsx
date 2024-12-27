import React, {useState} from 'react'
import { Data } from '../Data/Data.js'
import { NavLink } from 'react-router-dom'

const Food = () => {
    // console.log(Data);
    // Const [Foods,setFood] = ( Data)


    
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu</h1>

            {/* Filter Row  */}
            <div className=' flex flex-col lg:flex-row justify-between'>
                {/* Filter Type  */}
                <div>
        <p className='font-bold text-gray-600'> Filter Type </p>
        <div>
            <button  className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white  m-1 '>All</button>
            <button className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white m-1  '>Rice</button>
            <button className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white m-1 '>Beans</button>
            <button className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white m-1 '>Eba</button>
            <button className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white m-1 '>Vegetable</button>
        </div>
                </div>
                {/* filter price  */}
                <div>
                    <p className='font-bold text-gray-600'>Filter Price</p>
                    <div className=' flex justify-between flex-wrap'>
                        <button   className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white  m-1 '>$</button>
                        <button  className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white  m-1 '>$$</button>
                        <button  className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white  m-1 '>$$$</button>
                        <button  className='border-orange text-orange-400 hover:bg-orange-600 hover:text-white  m-1 '>$$$$</button>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 rounded-lg gap-6'>
             
                {Data.map ( ( items,index ) => (
                    <div key={index} className='shadow:4xl duration-300 hover:scale-110 border  '>
                        <img className='w-full h-[200px] object-cover rounded-t-lg ' src={items.Image} alt="" />
                        <div className='flex justify-between px-2 py-4 '>
                            <p className='font-bold'>{items.Name}</p>
                            <p>
                               <span className='bg-orange-500 text-white p-1'>${items.Price}</span> 
                            </p>
                        </div>
                        <NavLink to = {`/foodDetails/${items.id}`}> BUY NOW</NavLink>
                    </div>
                ))}
               
            </div>

                



    </div>
  )
}

export default Food