import React from 'react'
import a1 from '../photos/architecture/a1.webp'
import background from '../photos/photographer.jpeg'



function Hero() {
  return (
	<div className="flex flex-col place-items-center h-1/2 bg-red-400 p-20 max-h-screen bg-no-repeat bg-center" 
	style={{ 
		backgroundImage: `url(${background})`
	  }}>
		<h1 className='text-center text-4xl font-bold sm:text-6xl  md:text-7xl lg:text-8xl xl:text-9xl pb-10'>
			Welcome to Hachan's Photo Gallery!
		</h1>
		{/* <img className='object-cover max-h-max' alt='random stuff' src={a1}/> */}
	</div>
  )
}

export default Hero