import React from 'react'
import background from '../photos/photographer.jpeg'



function Hero() {
  return (
	<div id='hero' className="container flex flex-col p-20 mx-auto bg-center bg-no-repeat bg-cover place-items-center h-1/2 brightness-50" 
	style={{ 
		backgroundImage: `url(${background})`
	  }}>
		<h1 className='pb-10 text-4xl font-bold text-center text-white break-normal sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl min-h-20vh md:min-h-30vh lg:min-h-40vh '>
			Welcome to Hachan's Photo Gallery!
		</h1>
	</div>
  )
}

export default Hero