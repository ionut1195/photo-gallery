import React from 'react';

const NavElement = ({text}) => {
	return (
		<div className='duration-300 pb-3 md:pb-0 ml-5 ease-in-out cursor-pointer hover:text-blue-400 font-nv2'>
			<a href={'#' + text.toLowerCase()}>{text}</a>
		</div>
	)
}

const Navbar = () => {
	return (
		<div id='home'>
			<div className=" bg-gray-100 pb-5 px-3 flex space-x-5 text-gray-700 text-s sm:text-xl md:text-2xl lg:text-3xl">
				<div className='container text-center mx-auto md:flex md:justify-end'>
					<NavElement text='Home'/>
					<NavElement text='Gallery'/>
					{/* <NavElement text='Pricing'/> */}
					<NavElement text='Contact' />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
