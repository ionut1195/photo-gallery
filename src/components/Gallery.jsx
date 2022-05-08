import React from 'react';

// const GalleryElement = ({src}) => {
// 	return (
// 			<div className="flex flex-wrap flex-none w-1/3 h-25 hover:scale-125 pb-7">
// 				<div className="w-full p-1 md:p-2">
// 					<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:shadow-lg hover:shadow-cyan-400/50"
// 					src={src} />
// 				</div>
// 			</div>
// 	)
// }
const GalleryElement = ({src}) => {
	return (
			<>
					<img alt="gallery" className="block object-cover hover:scale-125 object-center w-full h-full rounded-lg hover:shadow-lg hover:shadow-cyan-400/50"
					src={src} />
			</>
	)
}
const Els = ({sec}) => sec.map(elem => <GalleryElement src={elem} />)


const Gallery = ({name, section }) => {
	return (
		<section className="container flex flex-col mx-auto mt-2 overflow-hidden text-gray-700 max-w-mac" id={name}>
			<h2 className='p-3 mt-4 text-2xl md:mt-7 lg:mt-10 xl:mt-14 font-bold tracking-widest text-center text-transparent uppercase transition duration-1000 ease-in-out transform font-roboto sm:text-3xl md:text-4xl lg:text-5xl  bg-gradient-to-r from-blue-200 to-blue-800 hover:from-blue-800 hover:to-blue-200 bg-clip-text '>
				{name}
			</h2>
			<div className="px-2 container grid gap-2 sm:gap-4 lg:gap-6 xl:gap-8 grid-cols-2 md:grid-cols-3 py-2 mx-auto mt-2 max lg:pt-12">
				{/* <div className="flex flex-wrap -m-1 md:-m-2 ">
					<Els sec={section}/>
				</div> */}
				<Els sec={section}/>
			</div>
		</section>
	);
}

export default Gallery;
