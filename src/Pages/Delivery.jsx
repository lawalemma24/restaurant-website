import { useState,react  }  from 'react'
import axios from 'axios'


const Delivery = () => {
  const [quote,setQuote] = useState( 'pls wait ')
 const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res  => { console.log(res.data.content)
      setQuote(res.data.content);

    }).catch (err =>{ console.log(err)

    })
    

  }
  return (
    <div className='justify-center items-center bg-gray-400 text-center   '>
      <h1 className='font-bold text-gray-600  '> Start Your Day With this motivative Quotes </h1>
      <button className=' border border-black rounded-xl h-8 px-5 ml-[200px] m-10 font-bold bg-blue-400 ' onClick={getQuote}>CLICK ME </button>
      { quote ? <h1 className='bg-white-600 shadow font-bold text-2xl max-w-sm text-red-950 bg-blue-700 ml-[200px] ' >{quote}</h1> : null }

    </div>
  )
}

export default Delivery