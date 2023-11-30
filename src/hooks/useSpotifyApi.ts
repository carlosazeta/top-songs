import { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyApiResponse } from '../types'

const useSpotifyApi = (token: string, playlistId: string) => {
	const [data, setData] = useState<SpotifyApiResponse | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setData(response.data)
				setLoading(false)
			} catch (err) {
				setError(err as Error)
				setLoading(false)
			}
		}

		if (token) {
			fetchData()
		}
	}, [token, playlistId])

	return { data, loading, error }
}

export default useSpotifyApi
