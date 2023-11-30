import { useState } from 'react'
import useSpotifyApi from '../hooks/useSpotifyApi'
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import { PlaylistId } from '../types'
import TrackCard from './TrackCard'
import { useSwipeable } from 'react-swipeable'

const ListOfTracks = ({ playlistId }: { playlistId: PlaylistId }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [score, setScore] = useState(0)
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, playlistId)

	const firstTwentyTracks = data?.items.slice(0, 20) || []

	const handlers = useSwipeable({
		onSwipedRight: () => handleSwipeRight(),
		onSwipedLeft: () => handleSwipeLeft(),
	})

	const handleSwipeRight = () => {
		setScore(score + 1)
		setCurrentIndex(currentIndex + 1)
	}

	const handleSwipeLeft = () => {
		setCurrentIndex(currentIndex + 1)
	}

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	return (
		<div {...handlers}>
			{firstTwentyTracks?.length > currentIndex && (
				<TrackCard
					key={firstTwentyTracks[currentIndex].track.id}
					trackData={firstTwentyTracks[currentIndex].track}
				/>
			)}
		</div>
	)
}

export default ListOfTracks
