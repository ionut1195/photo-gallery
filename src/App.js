
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
// import a1 from './photos/architecture/a1.webp'


function App() {
  return (
		<div>	
			<Navbar />
			<Hero />
			<Gallery section="architecture"/>
		</div>
    	
  );
}

export default App;
