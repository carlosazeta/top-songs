import './App.css'
import ListOfTracks from './components/ListOfTracks'

function App() {
	const playlistSpainId = '37i9dQZEVXbNFJfN1Vw8d9'

	return (
		<>
			<h1>20 top songs</h1>
			<ListOfTracks playlistId={playlistSpainId} />
		</>
	)
}

export default App
