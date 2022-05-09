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
					<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-cyan-400/50"
					src={src} />
			</>
	)
}
const Els = ({sec}) => sec.map(elem => <GalleryElement src={elem} />)


const Gallery = ({name, section }) => {
	return (
		<section className="container flex flex-col mx-auto mt-2 overflow-hidden text-gray-700 max-w-mac" id={name}>
			<h2 className='p-3 mt-4 text-2xl font-bold tracking-widest text-center uppercase transition duration-1000 ease-in-out transform border-b-4 border-b-border-dark md:mt-7 lg:mt-10 xl:mt-14 font-roboto sm:text-3xl md:text-4xl lg:text-5xl '>
				{name}
			</h2>
			<div className="container grid grid-cols-2 gap-2 px-2 py-2 mx-auto mt-2 sm:gap-4 lg:gap-6 xl:gap-8 md:grid-cols-3 max lg:pt-12">
				{/* <div className="flex flex-wrap -m-1 md:-m-2 ">
					<Els sec={section}/>
				</div> */}
				<Els sec={section}/>
			</div>
		</section>
	);
}

export default Gallery;
