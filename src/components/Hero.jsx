import React from 'react'
import background from '../photos/photographer.jpeg'



function Hero() {
  return (
	<div className='container relative flex flex-col mx-auto h-30vh md:h-40vh lg:h-50vh'>
		<div id='hero' className="static w-full h-full p-20 mx-auto bg-center bg-no-repeat bg-cover max-w-mac place-items-center brightness-50" 
	style={{ 
		backgroundImage: `url(${background})`
	  }}>
		
	</div>
	<h1 className='absolute pb-10 text-4xl font-bold text-center text-[#E7F0E9] break-normal top-1/3 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl min-h-20vh md:min-h-30vh lg:min-h-40vh '>
			Welcome to Hachan's Photo Gallery!
		</h1>
	</div>
  )
}

export default Hero