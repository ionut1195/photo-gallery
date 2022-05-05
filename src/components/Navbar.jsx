import React from 'react';

const NavElement = ({text}) => {
	return (
		<li className='hover:text-pink-200 ease-in-out duration-300 cursor-pointer'>
			{text}
		</li>
	)
}

const Navbar = () => {
	return (
		<div>
			<ul className="list-none flex justify-end space-x-5 px-3 uppercase font-bold
			 text-white text-s sm:text-1xl md:text-2xl lg:text-3xl lx:text-4xl bg-blue-400">
				<NavElement text='home'/>
				<NavElement text='gallery'/>
				<NavElement text='pricing'/>
				<NavElement text='contact' />
			</ul>
		</div>
	);
}

export default Navbar;
