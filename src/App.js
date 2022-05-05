import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';

// import GalleryElement from './components/Gallery'
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

const architecture = [g1,g2,g3,g4,g5,g6,g7,g8]

// const Arch = () => architecture.map(elem => <GalleryElement src={elem} />)
const nature = [n1, n2, n3, n4, n5, n6, n7, spider]



function App() {
  return (
		<div>	
			<Navbar />
			<Hero id='hero' />
			<div id='gallery'>
				<Gallery name="architecture" section={architecture}/>
				<Gallery name="nature" section={nature}/>
			</div>
			<Pricing />
		</div>
    	
  );
}

export default App;
