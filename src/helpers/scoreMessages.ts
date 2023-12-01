import { Score, ScoreMessages } from '../types'

const scoreMessages: ScoreMessages = {
	1: 'Empezamos bien...',
	2: 'Vaya, ¿esa era fácil? ¿En serio?',
	3: 'Bueno, esa hasta mi abuela la conoce...',
	4: '¿Vives en una radio o qué?',
	5: 'Me suena la portada(no)',
	6: 'Estoy empezando a preocuparme...',
	7: 'Alguien necesita diversificar su playlist',
	8: 'A este paso te contrato como mi Shazam personal',
	9: 'Necesitas tocar un poco de cesped',
	10: 'NPC detectado',
}

export const getMessageForScore = (score: Score) => {
	return scoreMessages[score] || '¡Sigue así!'
}
