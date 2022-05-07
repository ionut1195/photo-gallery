import React from 'react';

const NavElement = ({text}) => {
	return (
		<div className='duration-300 ease-in-out cursor-pointer hover:text-blue-400 font-nv2'>
			<a href={'#' + text.toLowerCase()}>{text}</a>
		</div>
	)
}

const Navbar = () => {
	return (
		<div>
			<div className="container flex justify-end px-3 mx-auto mb-2 space-x-5 text-gray-700 text-s sm:text-xl md:text-2xl lg:text-3xl md:mb-4">
				<NavElement text='Home'/>
				<NavElement text='Gallery'/>
				{/* <NavElement text='Pricing'/> */}
				<NavElement text='Contact' />
			</div>
		</div>
	);
}

export default Navbar;
