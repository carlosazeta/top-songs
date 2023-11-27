import useSpotifyApi from '../hooks/useSpotifyApi'
import useSpotifyAuth from '../hooks/useSpotifyAuth'

const ListOfTracks = ({ playlistId }: { playlistId: string }) => {
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, playlistId)

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	console.log(data)

	return (
		<div>
			<p>Lista de canciones</p>
		</div>
	)
}

export default ListOfTracks
