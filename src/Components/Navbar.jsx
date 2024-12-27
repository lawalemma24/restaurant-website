import  React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import { TbTruckDelivery } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { CiBookmarkCheck } from "react-icons/ci";
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav = ( ) =>
   setNav (!nav)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
      {/* left side */}
      <div className='flex items-center '>
      <div className='cursor-pointer' onClick={handleNav}>
        <AiOutlineMenu size={30}/>
      </div>
      <Link to = "/"> <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'> Best <span className='font-bold'>Eats</span></h1> </Link>
      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] '>
        <Link to = "delivery"> <p className='bg-black text-white rounded-full p-2 justify-between ml-2 mt-3  ' >Delivery</p> </Link>
        <Link to = "pickup"> <p className='mr-2 mt-3'>Pick Up</p> </Link>
      </div>
      </div>
       
       {/* search input */}
       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={30}/>
        <input className='bg-transparent p-2 focus:outline-none w-full  ' type="text" placeholder='type your search' />

       </div>

       {/* Cart Button */}
       
       <button className='rounded-full bg-black text-white hidden md:flex items-center'>
        <BsFillCartFill size={20}/> Cart
       </button>

       {/* mobile menu */}
       {/* Over Lay  */}
       {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> </div>: "" }
       

    {/* Side-drawer menu         */}
    <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ' }>
      <AiOutlineClose size={20} onClick={handleNav} className='absolute right-4 top-4 cursor-pointer '/>
      <Link to= "/"> <h2 className='text-2xl p-4  '>Best <span className='font-bold'>Eats</span></h2> </Link>
      <nav>
        <span className='flex flex-col p-4 text-gray-600 '>
          <Link to = "/order"  className='text-xl py-4 flex  '> <TbTruckDelivery very size={30} className=" mr-4"/> Orders </Link >
          <Link to = "/Favourites"  className='text-xl py-4 flex  '> <GiSelfLove  size={30} className=" mr-4"/> Favourites </Link >
          <Link  to = "/Wallets" className='text-xl py-4 flex  '> <IoWallet size={30} className=" mr-4"/> Wallets  </Link >
          <Link to = "/Help"  className='text-xl py-4 flex  '> <FaHandsHelping size={30} className=" mr-4"/> Help </Link >
          <Link to = "/Promotions"  className='text-xl py-4 flex  '> <TbTruckDelivery very size={30} className=" mr-4"/> Promotions </Link >
          <Link to = "/Combo"  className='text-xl py-4 flex  '> <CiBookmarkCheck size={30} className=" mr-4"/> Combo </Link >
          <Link to = "/Invite"  className='text-xl py-4 flex  '> <FcInvite size={30} className=" mr-4"/> Invite a friend  </Link >
        </span>

             {/* <span className='flex flex-col p-4 text-gray-600'>
          <NavLink to = "/" >  <p> Orders  </p></NavLink> 
          <NavLink to = "/Favourites"> <p> Favourites </p></NavLink>
          <NavLink to = "/Wallets"> <p> Wallets </p></NavLink>
          <NavLink to = "/Help"> <p> Help </p></NavLink>
          <NavLink to = "/Promotion"> <p> Promotion </p></NavLink>
          <NavLink to = "/Combo"> <p> Combo </p></NavLink>
          <NavLink to = "/Invite"> <p> Invite </p></NavLink>
          </span>   */}
      </nav>

    </div>

    </div>
  
  )
}

export default Navbar