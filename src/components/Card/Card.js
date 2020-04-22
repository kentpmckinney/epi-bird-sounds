
import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
		super(props);
    this.state = {
      flipCard: false
    };
  }
  handleClick = () => { 
    this.setState(prevState => ({
      flipCard: !prevState.flipCard
  }))
}
  render() {
    let q1 = this.props.questions[0].question;
    let a1 = this.props.questions[0].answer;
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

