export interface Artist {
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	name: string
	type: string
	uri: string
}

interface Image {
	url: string
	height: number
	width: number
}

interface Album {
	album_type: string
	total_tracks: number
	available_markets: string[]
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	images: Image[]
	name: string
	release_date: string
	release_date_precision: string
	type: string
	uri: string
	artists: Artist[]
}

interface Track {
	album: Album
	artists: Artist[]
	name: string
	id: string
	preview_url: string
}

interface SpotifyTrackItem {
	added_at: string
	is_local: boolean
	track: Track
}

export interface SpotifyApiResponse {
	href: string
	limit: number
	next: string
	offset: number
	previous: string | null
	total: number
	items: SpotifyTrackItem[]
}

export type PlaylistId = string

export type Token = string

export type Score = number

interface ScoreMessages {
	[key: number]: string
}

interface ScoreMessageProps {
	score: Score
}
