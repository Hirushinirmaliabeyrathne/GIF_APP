import React from 'react'
import useGif from '../useGif'


const Random_V2 = () => {

    const [gif, fetchGif] = useGif();
    
  return (
    <div>
       <h1>Random Gif</h1>
          <img width={"500"} src={gif} alt='Random Gif' />
          <button onClick={fetchGif}>Click Me</button>
    </div>
  )
}

export default Random_V2
