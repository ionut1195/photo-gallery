import React from 'react';
import g1 from '../photos/architecture/a1.webp'
import g2 from '../photos/architecture/a2.webp'
import g3 from '../photos/architecture/a3.webp'
import g4 from '../photos/architecture/a4.webp'
import g5 from '../photos/architecture/a5.webp'
import g6 from '../photos/architecture/a6.webp'
import g7 from '../photos/architecture/a7.webp'
import g8 from '../photos/architecture/a8.webp'

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

const Gallery = ({section}) => {
	return (
		<section className="overflow-hidden text-gray-700" id={section}>
			<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
				<div class="flex flex-wrap -m-1 md:-m-2">
				<GalleryElement src={g1}/>
				<GalleryElement src={g2}/>
				<GalleryElement src={g3}/>
				<GalleryElement src={g4}/>
				<GalleryElement src={g5}/>
				<GalleryElement src={g6}/>
				<GalleryElement src={g7}/>
				<GalleryElement src={g8}/>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
