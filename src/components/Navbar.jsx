import React from 'react';

const NavElement = ({text}) => {
	return (
		<div className='pb-3 mx-5 duration-300 ease-in-out cursor-pointer md:pb-0 hover:text-hover-color font-nv2'>
			<a href={'#' + text.toLowerCase()}>{text}</a>
		</div>
	)
}

const Navbar = () => {
	return (
		<div id='home'>
			<div className="flex px-3 pb-5 space-x-5  bg-[#98B0A8] text-s sm:text-xl md:text-2xl lg:text-3xl">
				<div className='container mx-auto text-center md:flex md:justify-center'>
					<NavElement text='Home'/>
					<NavElement text='Gallery'/>
					<NavElement text='Contact' />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
