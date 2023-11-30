import { useState } from 'react'
import useSpotifyApi from '../hooks/useSpotifyApi'
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import { PlaylistId } from '../types'
import TrackCard from './TrackCard'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'

const ListOfTracks = ({ playlistId }: { playlistId: PlaylistId }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [score, setScore] = useState(0)
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, playlistId)

	const firstTwentyTracks = data?.items.slice(0, 20) || []

	const x = useMotionValue(0)

	const background = useTransform(
		x,
		[-100, 0, 100],
		['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
	)

	const rotate = useTransform(x, [-100, 100], [-10, 10])

	const handleSwipeRight = () => {
		setScore(score + 1)
		setCurrentIndex(currentIndex + 1)
	}

	const handleSwipeLeft = () => {
		setCurrentIndex(currentIndex + 1)
	}

	const handleDragEnd = (
		e: MouseEvent | TouchEvent | PointerEvent,
		{ offset }: PanInfo
	) => {
		const swipeThreshold = 90
		const userSwipe = Math.abs(offset.x)

		if (userSwipe > swipeThreshold) {
			handleSwipeRight()
		} else if (userSwipe < -swipeThreshold) {
			handleSwipeLeft()
		}
	}

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	return (
		<motion.div
			style={{ background }}
			className='min-h-screen min-w-full flex justify-center items-center'
		>
			{firstTwentyTracks.length > currentIndex && (
				<div className='border-4 rounded-md p-4'>
					<motion.div
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						style={{ x, rotate }}
						onDragEnd={handleDragEnd}
					>
						<TrackCard trackData={firstTwentyTracks[currentIndex].track} />
					</motion.div>
				</div>
			)}
		</motion.div>
	)
}

export default ListOfTracks
