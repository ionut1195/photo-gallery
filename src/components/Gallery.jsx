import React from 'react';

// const GalleryElement = ({src, onClick}) => {
// 	return (
// 			<>
// 					<img onClick={onClick} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
// 					src={src} />
// 			</>
// 	)
// }
// const Els = ({sec, onClick}) => sec.map(elem => <GalleryElement onClick={onClick} src={elem} />)


// const Gallery = ({name, section, onClick }) => {
// 	return (
// 		<section className="container flex flex-col mx-auto mt-2 overflow-hidden text-gray-700 max-w-mac" id={name}>
// 			<h2 className='p-3 mt-4 text-2xl font-bold tracking-widest text-center uppercase transition duration-1000 ease-in-out transform border-b-4 border-b-border-dark md:mt-7 lg:mt-10 xl:mt-14 font-roboto sm:text-3xl md:text-4xl lg:text-5xl '>
// 				{name}
// 			</h2>
// 			<div className="container grid grid-cols-2 gap-2 px-2 py-2 mx-auto mt-2 sm:gap-4 lg:gap-6 xl:gap-8 md:grid-cols-3 max lg:pt-12">
// 				<Els onClick={onClick} sec={section}/>
// 			</div>
// 		</section>
// 	);
// }

const GalleryElement = ({src, id, onClick}) => {
	return (
			<>
					<img id={id} onClick={onClick} alt="" className="block object-cover object-center w-full h-full rounded-lg"
					src={src} />
			</>
	)
}
const Els = ({sec, onClick}) => sec.map(elem => <GalleryElement onClick={onClick} id={elem.id} key={elem.id} src={elem.link} />)


const Gallery = ({name, section, onClick }) => {
	return (
		<section className="container flex flex-col mx-auto mt-2 overflow-hidden text-gray-700 max-w-mac" id={name.toLowerCase()}>
			<h2 className='p-3 mt-4 text-2xl font-bold tracking-widest text-center uppercase transition duration-1000 ease-in-out transform border-b-4 border-b-border-dark md:mt-7 lg:mt-10 xl:mt-14 font-roboto sm:text-3xl md:text-4xl lg:text-5xl '>
				{name}
			</h2>
			<div className="container grid grid-cols-2 gap-2 px-2 py-2 mx-auto mt-2 sm:gap-4 lg:gap-6 xl:gap-8 md:grid-cols-3 max lg:pt-12">
				<Els onClick={onClick} sec={section}/>
			</div>
		</section>
	);
}

export default Gallery;
