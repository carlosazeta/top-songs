import './App.css'
import ListOfTracks from './components/ListOfTracks'

function App() {
	const playlistId = '37i9dQZEVXbNFJfN1Vw8d9'

	return (
		<>
			<ListOfTracks playlistId={playlistId} />
		</>
	)
}

export default App
