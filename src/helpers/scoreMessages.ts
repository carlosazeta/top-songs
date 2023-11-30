import { Score, ScoreMessages } from '../types'

const scoreMessages: ScoreMessages = {
	1: 'No se yo si vas a conocer esta',
	2: 'Esta dicen que es buena...',
	10: '¡Excelente!',
}

export const getMessageForScore = (score: Score) => {
	return scoreMessages[score] || '¡Sigue así!'
}
