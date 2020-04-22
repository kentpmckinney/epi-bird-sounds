
import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
		super(props);
    this.state = {
      flipCard: false,
      questionIndex: 0
    };
  }
  handleClick = () => { 
    this.setState(prevState => ({
      flipCard: !prevState.flipCard,
      questionIndex: this.state.flipCard ? this.state.questionIndex + 1: this.state.questionIndex
  }))
}



  render() {
    let q1 = this.props.questions[this.state.questionIndex].question;
    let a1 = this.props.questions[this.state.questionIndex].answer;
    let visibleSide = null;
    if(this.state.flipCard){
      visibleSide =  <h1>Question: {q1} Answer: {a1}</h1>
    } else {
      visibleSide = <h1>{q1}</h1>
    }
    return (
      <div>
        {visibleSide}
        <button onClick={this.handleClick}>See Answer</button>
      </div>
    )
  }
}

