import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import StickySidebar from './components/StickySidebar';

import g1 from './photos/architecture/a1.webp'
import g2 from './photos/architecture/a2.webp'
import g3 from './photos/architecture/a3.webp'
import g4 from './photos/architecture/a4.webp'
import g5 from './photos/architecture/a5.webp'
import g6 from './photos/architecture/a6.webp'
import g7 from './photos/architecture/a7.webp'
import g8 from './photos/architecture/a8.webp'

import n1 from './photos/nature/n1.webp'
import n2 from './photos/nature/n2.webp'
import n3 from './photos/nature/n3.webp'
import n4 from './photos/nature/n4.webp'
import n5 from './photos/nature/n5.webp'
import n6 from './photos/nature/n6.webp'
import n7 from './photos/nature/n7.webp'
import spider from './photos/nature/spider.webp'
import autumn from './photos/nature/autumn-leaves.webp'
import bird from './photos/nature/bird.webp'
import fire from './photos/nature/fire.webp'
import lake from './photos/nature/lake.webp'
import mountain from './photos/nature/mountain.webp'
import sunrise from './photos/nature/sunrise.webp'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'

const allPictures = [g1,g2,g3,g4,g5,g6,g7,g8 ,n1, n2, n3, n4, n5, n6, n7, spider, autumn, bird, fire, mountain,lake, sunrise]


function App() {
	const [hiddenDisplay, setHiddenDisplay] = useState('hidden')
	const handleSetHiddenDisplay = () => {
		setHiddenDisplay('block')
	}
	const toggleHiddenDisplay = () => {
		setHiddenDisplay(hiddenDisplay === 'hidden' ? 'block': 'hidden')
	}
	const [imgSource, setImgSource] = useState('')
	const handleSetImgSource = (st) => {
		setImgSource(st)
	}

	const handleImgClick = (event) => {
		console.log(event)
		handleSetHiddenDisplay()
		handleSetImgSource(event.target.attributes.src.value)
	}

	const handleClickLeft = () => {
		const idx = allPictures.indexOf(imgSource)
		setImgSource(allPictures[idx > 0 ? idx - 1 : allPictures.length - 1])
	}
	const handleClickRight = () => {
		const idx = allPictures.indexOf(imgSource)
		setImgSource(allPictures[idx < allPictures.length - 1 ? idx + 1 : 0])
	}

  return (
		<div className='relative'>
			<Navbar />
			<Hero id='hero' />
			<StickySidebar />
			<div className={`${hiddenDisplay} sticky container justify-center items-center flex md:top-[10%] backdrop-blur-lg z-10  mx-auto rounded-2xl bg-blue-100 h-[100vh]  md:h-50vh lg:h-[calc(100vh_-_20vh)]`}>
				<FontAwesomeIcon onClick={handleClickLeft} className='absolute cursor-pointer left-0 top-1/2 text-hover-color text-2xl opacity-50 hover:opacity-100' icon={faCircleLeft} />
				<FontAwesomeIcon onClick={handleClickRight} className='absolute cursor-pointer top-1/2 right-0  text-hover-color text-2xl  opacity-50 hover:opacity-100' icon={faCircleRight} />
				{console.log(allPictures.indexOf(imgSource))}
				<img  onClick={toggleHiddenDisplay} src={imgSource} className='h-auto w-auto md:h-full' alt=''></img>
			</div>
			<div id='gallery'>
				<Gallery onClick={handleImgClick} name="Gallery" section={allPictures}/>
			</div>
			<Contact />
		</div>
    	
  );
}

export default App;
