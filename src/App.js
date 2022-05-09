import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

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
import { faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'

const architecture = [g1,g2,g3,g4,g5,g6,g7,g8]
const nature = [n1, n2, n3, n4, n5, n6, n7, spider, autumn, bird, fire, mountain,lake, sunrise]





function App() {
	const [hiddenDisplay, setHiddenDisplay] = useState('hidden')
	const handleSetHiddenDisplay = () => {
		setHiddenDisplay(hiddenDisplay === 'hidden' ? 'block': 'hidden')

	}

  return (
		<div className='relative'>
			<Navbar />
			<Hero id='hero' />
			<div  className='hidden z-10 text-header-green sticky justify-center gap-y-2 items-center text-2xl bg-border-dark md:grid grid-rows-2 w-10 h-20 top-[50vh] left-[calc(100%_-_3rem)] rounded-lg'>
				<a className='hover:text-hover-color ' href='#home'><FontAwesomeIcon icon={faAnglesUp} /></a>
				<a className='hover:text-hover-color' href='#contact'><FontAwesomeIcon icon={faAnglesDown} /></a>
			</div>
			<div onClick={handleSetHiddenDisplay} className={`${hiddenDisplay}  container flex top-[10%] z-10  mx-auto rounded-2xl bg-red-400 h-[calc(100vh_-_20vh)]`}>
				
			</div>
			<div id='gallery'>
				<Gallery onClick={handleSetHiddenDisplay} name="architecture" section={architecture}/>
				<Gallery onClick={handleSetHiddenDisplay} name="nature" section={nature}/>
			</div>
			<Contact />
		</div>
    	
  );
}

export default App;
