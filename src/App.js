import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import StickySidebar from './components/StickySidebar';
import HiddenDisplay from './components/HiddenDisplay';
import {useState, useEffect} from 'react'


function App() {
  const [links, setLinks] = useState([]);
 
  useEffect(() => {
    async function getLinks() {
      const response = await fetch(`http://localhost:5000/links/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const links = await response.json();
      setLinks(links);
    }
  
    getLinks();
  
    return;
  }, [links.length]);

  // console.log(links)
  const srcLinks = links.map(element => element.link)
  // console.log(srcLinks)
	const [hiddenDisplay, setHiddenDisplay] = useState('hidden')
	const handleSetHiddenDisplay = () => {
		setHiddenDisplay('flex')
	}
	const HideDisplay = () => {
		setHiddenDisplay('hidden')
	}
	const [imgSource, setImgSource] = useState('')
	const handleSetImgSource = (st) => {
		setImgSource(st)
	}

	const handleImgClick = (event) => {
		// console.log(event)
		handleSetHiddenDisplay()
		handleSetImgSource(event.target.attributes.src.value)
	}

	const handleClickLeft = () => {
		const idx = links.indexOf(imgSource)
		setImgSource(srcLinks[idx > 0 ? idx - 1 : srcLinks.length - 1])
	}
	const handleClickRight = () => {
		const idx = srcLinks.indexOf(imgSource)
		setImgSource(srcLinks[idx < srcLinks.length - 1 ? idx + 1 : 0])
	}

  return (
		<div className='relative flex flex-col '>
			<Navbar />
			<Hero id='hero' />
			<StickySidebar />
      <HiddenDisplay display={hiddenDisplay} leftClick={handleClickLeft} rightClick={handleClickRight} 
      hide={HideDisplay} show={handleSetHiddenDisplay} imgSource={imgSource}/>
			<Gallery onClick={handleImgClick} name="Gallery" section={srcLinks}/>
			<Contact />
		</div>
    	
  );
}

export default App;
