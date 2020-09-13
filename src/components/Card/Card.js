import React, { Component } from 'react';

const cardStyle = {
	border: '1px solid lightblue',
	padding: '30px',
	borderRadius: '20px',
	backgroundColor: 'powderblue',
	boxShadow: '1px 1px 3px #0066AA',
	width: '400px',
	height: '150px',
	alignItems: 'center',
	fontSize: '20pt',
	fontWeight: 'lighter',
	display: 'grid',
	justifyContent: 'center'
};

export default class Card extends Component {
	render() {
		return (
			<div>
				<div className="flip-card">
    			<div className="flip-card-inner">
						<div className="flip-card-front" style={cardStyle}>{this.props.question.question}</div>
						<div className="flip-card-back" style={cardStyle}><div style={{color: 'steelblue', fontSize: '12pt'}}>Answer:</div>{this.props.question.answer}</div>
					</div>
				</div>
			</div>
		);

	}
}