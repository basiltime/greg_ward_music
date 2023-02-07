import './App.css';

function App() {
  return (
    <div className="App">
		<header className="header">
			<nav>
				<ul>
					<li>About</li>
					<li>Listen</li>
					<li>Albums</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>

		<main>
			<div>
				<h1>Greg Ward</h1>
				<h3>Producer</h3>
			</div>
		</main>

		<footer>
			<nav>
				<ul>
					<li>Spotify</li>
					<li>Apple Music</li>
				</ul>
			</nav>
		</footer>
    </div>
  );
}

export default App;
