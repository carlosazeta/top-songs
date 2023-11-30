import { Artist, Track } from '../types'

const TrackCard = ({ trackData }: { trackData: Track }) => {
	const getArtistNames = (artists: Artist[]): string => {
		return artists.map((artist) => artist.name).join(', ')
	}

	return (
		<div className='p-3'>
			<img className='' src={trackData.album.images[1].url} alt='' />
			<p>{trackData.name}</p>
			<p>{getArtistNames(trackData.artists)}</p>
		</div>
	)
}

export default TrackCard
