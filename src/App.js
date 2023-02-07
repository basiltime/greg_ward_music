import './App.css';
import { Link } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Listen from './listen.js';
import Albums from './albums.js';
import Contact from './contact.js';
import { Routes, Route } from "react-router-dom"
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa"
function App() {
  return (
    <div className="App">
		<header className="header">
			<nav>
				<ul>
					<li className="homeLink"><Link to="/">Homepage</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="listen">Listen</Link></li>
					<li><Link to="albums">Albums</Link></li>
					{/* <li><Link to="contact">Contact</Link></li> */}
				</ul>
			</nav>
		</header>
		<Routes>
			<Route path="/" element={ <Home />} />
			<Route path="/about" element={ <About />} />
			<Route path="/listen" element={ <Listen />} />
			<Route path="/albums" element={ <Albums />} />
			<Route path="/contact" element={ <Contact />} />
		</Routes>
		
		<footer>
			<nav>
				<ul>
					<li><a href="https://open.spotify.com/artist/226OGrNi54gah4MLcfrej8?si=_zuc1XuRRgm2nt3iXyLAyQ"><FaSpotify></FaSpotify>Spotify</a></li>
					<li><a href="/"><FaApple></FaApple>Apple Music</a></li>
				</ul>
			</nav>
		</footer>
    </div>
  );
}

export default App;
