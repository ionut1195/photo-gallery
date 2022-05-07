import React from 'react';

const GalleryElement = ({src}) => {
	return (
			<div className="flex flex-wrap flex-none w-1/3 h-25 hover:scale-125 lg:w-1/4 pb-7">
				<div className="w-full p-1 md:p-2">
					<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:shadow-lg hover:shadow-cyan-400/50"
					src={src} />
				</div>
			</div>
	)
}
const Els = ({sec}) => sec.map(elem => <GalleryElement src={elem} />)


const Gallery = ({name, section }) => {
	return (
		<section className="container flex flex-col mx-auto mt-2 overflow-hidden text-gray-700" id={name}>
			<h2 className='p-3 mt-4 text-xl font-bold tracking-widest text-center text-transparent uppercase transition duration-1000 ease-in-out transform font-drawn sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-blue-200 to-blue-800 hover:from-blue-800 hover:to-blue-200 bg-clip-text '>
				{name}
			</h2>
			<div className="container px-5 py-2 mx-auto mt-2 lg:pt-12 2xl:px-36 mac:px-40">
				<div className="flex flex-wrap -m-1 md:-m-2">
					<Els sec={section}/>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
