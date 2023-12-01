import { getFinalMessage } from '../helpers/resultMessages'
import { ScoreMessageProps } from '../types'

const ResultMessage = ({ score }: ScoreMessageProps) => {
	const message = getFinalMessage(score)
	return (
		<div className='min-h-screen min-w-full bg-black flex flex-col justify-center items-center text-white text-2xl font-semibold antialiased'>
			<p>Resultado final: {score}</p>
			<p>{message}</p>
		</div>
	)
}

export default ResultMessage
