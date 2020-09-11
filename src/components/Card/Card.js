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
	fontSize: '16pt'
};

export default class Card extends Component {
	render() {
		return (
			<div>
				<div className="flip-card">
    			<div className="flip-card-inner">
						<div className="flip-card-front" style={cardStyle}>{this.props.question.question}</div>
						<div className="flip-card-back" style={cardStyle}>Answer: {this.props.question.answer}</div>
					</div>
				</div>
			</div>
		);

	}
}