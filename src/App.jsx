import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Orders from './Pages/Orders'
import Favourites from './Pages/Favourites'
import Wallets from './Pages/Wallets'
import Help from './Pages/Help'
import Invite from './Pages/Invite'
import Combo from './Pages/Combo'
import Promotion from './Pages/Promotion'
import Delivery from './Pages/Delivery'
import Pickup from './Pages/Pickup'
// import foodDetails from './Components/foodDetails'
// import Favourites from './Components/Pages/Favourites'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/order' element = {<Orders/>}/>
     <Route path='/favourites' element = {<Favourites/>} />
     <Route path="/wallets" element = {<Wallets/>} />
     <Route path='/invite' element = {<Invite/>}/>
     <Route path='/help' element = {<Help/>} />
     {/* <Route path='/food/:id' element = {<foodDetails/>}> */}
     <Route path='/combo' element = {<Combo/>} />
     <Route path='/promotion' element = {<Promotion/>} />
     <Route path='delivery' element = {<Delivery/>} />
     <Route path='pickup' element = {<Pickup/>} />
     </Routes>
    </div>
  )
}

export default App