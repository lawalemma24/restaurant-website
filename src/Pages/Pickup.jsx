import { useState } from 'react' 
import axios from 'axios'

const Pickup = () => {
  const [caption,setCaption] = useState('initial data')
  const quote = ( ) => {
    axios.get('https://api.quotable.io/random').then( (res) => {console.log(res.data.content); setCaption((res.data.content))}).catch( (err) => {} );

  }
  return (
    <div>
        <button className='bg-red ml-[500px] mt-8 rounded-full text-2xl ' onClick={quote}>Generate Caption</button>
        {caption ? <h1>{caption}</h1> : null}


    </div>
  )
}

export default Pickup