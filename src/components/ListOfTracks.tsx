import useSpotifyApi from '../hooks/useSpotifyApi'
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import { PlaylistId } from '../types'
import TrackCard from './TrackCard'

const ListOfTracks = ({ playlistId }: { playlistId: PlaylistId }) => {
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, playlistId)

	const firstTwentyTracks = data?.items.slice(0, 20)

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	console.log(firstTwentyTracks)

	return (
		<>
			{firstTwentyTracks?.map((trackItem) => (
				<TrackCard key={trackItem.track.id} trackData={trackItem.track} />
			))}
		</>
	)
}

export default ListOfTracks
