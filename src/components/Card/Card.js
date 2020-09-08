import React, { Component } from 'react';

export default class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flipCard: false,
			questionIndex: 0,
			buttonText: 'See Answer'
		};
	}

	handleClick = () => {
		this.setState((prevState) => ({
			flipCard: !prevState.flipCard,
			buttonText: this.state.flipCard ? 'See Answer' : 'Next Card',
			questionIndex: this.state.flipCard ? this.state.questionIndex + 1 : this.state.questionIndex
		}));
	};

	render() {
		const cardStyle = {
			border: '1px solid lightblue',
			padding: '30px',
			borderRadius: '20px',
			backgroundColor: 'powderblue',
			boxShadow: '2px 2px 5px #0066AA',
			minWidth: '400px',
			maxWidth: '400px',
			minHeight: '150px',
			paddingBottom: '20px',
			textAlign: 'center',
			alignItems: 'center'
		};

		const buttonStyle = {
			border: '2px solid rgb(0, 95, 139)',
			backgroundColor: 'rgb(135, 217, 250)',
			height: '50px',
			width: '150px',
			borderRadius: '10px',
			marginTop: '10px'
		};

		let q1 = this.props.questions[this.state.questionIndex].question;
		let a1 = this.props.questions[this.state.questionIndex].answer;

		let front = (<h1>{q1}</h1>);
		let back = (<h1>Answer: {a1}</h1>);

		return (
			<React.Fragment>
				<div className="flip-card">
    			<div className="flip-card-inner">
						<div className="flip-card-front" style={cardStyle}>{front}</div>
						<div className="flip-card-back" style={cardStyle}>{back}</div>
					</div>
				</div>
				<button style={buttonStyle} onClick={this.handleClick}>
			 		{this.state.buttonText}
			 	</button>
			</React.Fragment>
		);

	}
}