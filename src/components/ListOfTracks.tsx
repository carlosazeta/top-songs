import { useState } from 'react'
import useSpotifyApi from '../hooks/useSpotifyApi'
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import { PlaylistId } from '../types'
import TrackCard from './TrackCard'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import ScoreMessage from './ScoreMessage'
import Loading from './Loading'
import ResultMessage from './ResultMessage'

const ListOfTracks = ({ playlistId }: { playlistId: PlaylistId }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [score, setScore] = useState(0)
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, playlistId)

	const firstTenTracks = data?.items.slice(0, 10) || []

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
		_e: MouseEvent | TouchEvent | PointerEvent,
		{ offset }: PanInfo
	) => {
		const swipeThreshold = 90
		const userSwipe = offset.x

		if (userSwipe > swipeThreshold) {
			handleSwipeRight()
		} else if (userSwipe < -swipeThreshold) {
			handleSwipeLeft()
		}
	}

	if (loading) return <Loading />
	if (error) return <p>{error.message}</p>

	return (
		<>
			{firstTenTracks.length <= currentIndex ? (
				<ResultMessage score={score} />
			) : (
				<div>
					<motion.div
						style={{ background }}
						className='min-h-screen min-w-full flex flex-col justify-center items-center'
					>
						<ScoreMessage score={score} />
						<div className='border-4 rounded-md p-4 mt-14'>
							<motion.div
								drag='x'
								dragConstraints={{ left: 0, right: 0 }}
								style={{ x, rotate }}
								onDragEnd={handleDragEnd}
							>
								<TrackCard trackData={firstTenTracks[currentIndex].track} />
							</motion.div>
						</div>
					</motion.div>
				</div>
			)}
		</>
	)
}

export default ListOfTracks
