import { Artist, Track } from '../types'

const TrackCard = ({ trackData }: { trackData: Track }) => {
	const getArtistNames = (artists: Artist[]): string => {
		return artists.map((artist) => artist.name).join(' - ')
	}

	return (
		<div className='text-center text-lg antialiased text-white font-medium'>
			<img
				className='rounded pointer-events-none'
				src={trackData.album.images[1].url}
				alt=''
			/>
			<p>{trackData.name}</p>
			<p className='max-w-[200px] mx-auto overflow-hidden text-ellipsis whitespace-nowrap'>
				{getArtistNames(trackData.artists)}
			</p>
		</div>
	)
}

export default TrackCard
