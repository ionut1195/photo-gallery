import React from 'react'
import background from '../photos/photographer.jpeg'



function Hero() {
  return (
	<div className='mx-auto container h-30vh md:h-40vh lg:h-50vh flex flex-col relative'>
		<div id='hero' className="p-20 h-full w-full static mx-auto bg-center bg-no-repeat bg-cover max-w-mac place-items-center  brightness-50" 
	style={{ 
		backgroundImage: `url(${background})`
	  }}>
		
	</div>
	<h1 className='pb-10 text-4xl absolute top-1/3 font-bold text-center text-white break-normal sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl min-h-20vh md:min-h-30vh lg:min-h-40vh '>
			Welcome to Hachan's Photo Gallery!
		</h1>
	</div>
  )
}

export default Hero