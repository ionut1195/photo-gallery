import React from 'react';

const GalleryElement = ({src}) => {
	return (
			<div className="flex flex-wrap w-1/3">
				<div className="w-full p-1 md:p-2">
					<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
					src={src} />
				</div>
			</div>
	)
}
const Els = ({sec}) => sec.map(elem => <GalleryElement src={elem} />)


const Gallery = ({name, section }) => {
	return (
		<section className="overflow-hidden text-gray-700 border-solid border-2
		 border-gray-300 mt-2" id={name}>
			<h2 className='font-bold transform uppercase text-center text-sm
			sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 p-3'>
				{name}
			</h2>
			<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
				<div className="flex flex-wrap -m-1 md:-m-2">
					<Els sec={section}/>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
