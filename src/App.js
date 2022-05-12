import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import StickySidebar from './components/StickySidebar';
import HiddenDisplay from './components/HiddenDisplay';
import {useState, useEffect} from 'react'
import InvoiceForm from './components/InvoiceForm';


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
  const srcLinks = links.map(element => ({link: element.link, id: element.id}))
  // console.log(srcLinks.length)
	const [hiddenDisplay, setHiddenDisplay] = useState('hidden')
	const handleSetHiddenDisplay = () => {
		setHiddenDisplay(hiddenDisplay === 'flex' ? 'hidden': 'flex')
	}
	const HideDisplay = () => {
		setHiddenDisplay('hidden')
	}
	const [imgSource, setImgSource] = useState('')
  const [imgId, setImgId] = useState(0)
  
  const handleSetImgId = (id) => {
    setImgId(id)
  }
	const handleSetImgSource = (st) => {
		setImgSource(st)
	}

	const handleImgClick = (event) => {
		// console.log(event)
		handleSetHiddenDisplay()
		handleSetImgSource(event.target.attributes.src.value)
    // console.log(parseInt(event.target.id))
    setImgId(parseInt(event.target.id))
	}

	const handleClickLeft = () => {
    let id = imgId > 0 ? imgId - 1 : srcLinks.length - 1
		setImgSource(srcLinks[id].link)
    handleSetImgId(id)
	}
	const handleClickRight = () => {
    let id = imgId < srcLinks.length - 1  ? imgId + 1 : 0
		setImgSource(srcLinks[id].link)
    handleSetImgId(id)
	}

  return (
		<div className='relative flex flex-col '>
			<Navbar />
			<Hero id='hero' />
			<StickySidebar />
      <HiddenDisplay display={hiddenDisplay} leftClick={handleClickLeft} rightClick={handleClickRight} 
      hide={HideDisplay} show={handleSetHiddenDisplay} imgSource={imgSource} photoId={imgId}/>
			<Gallery onClick={handleImgClick} name="Gallery" section={srcLinks}/>
      <InvoiceForm />
			<Contact />
		</div>
    	
  );
}

export default App;
