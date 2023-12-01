import { getMessageForScore } from '../helpers/scoreMessages'
import { ScoreMessageProps } from '../types'

const ScoreMessage = ({ score }: ScoreMessageProps) => {
	const message = getMessageForScore(score)
	return (
		<div className='flex justify-center text-white text-2xl font-semibold antialiased w-4/5'>
			{score > 0 ? (
				message
			) : (
				<p className='text-center'>Swipea DERECHA si conoces la canción</p>
			)}
		</div>
	)
}

export default ScoreMessage
