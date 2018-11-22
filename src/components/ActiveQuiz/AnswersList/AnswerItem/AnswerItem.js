import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = props => {
	console.log(props.AnswerItem)
	return (
		<li 
		className={classes.AnswerItem}
		onClick={() => props.onAnswerClick(props.answer.id)}
		>
			{ props.answer.text }
			
		</li>
	)
}

export default AnswerItem