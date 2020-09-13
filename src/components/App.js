import React from 'react';
import Card from './Card/Card'
import './App.css';

let questions = [
  {
    question: 'What sounds does a crow make?',
    answer: 'caw'
  },
  {
    question: 'What sounds do geese make?',
    answer: 'honk'
  },
  {
    question: 'What sounds do peacocks make?',
    answer: 'scream'
  },
  {
    question: 'What sounds does a pigeon make?',
    answer: 'coo'
  },
  {
    question: 'What sounds does a quail make?',
    answer: 'call'
  },
  {
    question: 'What sounds does a raven make?',
    answer: 'caw'
  },
  {
    question: 'What sounds do vultures make?',
    answer: 'scream'
  },
  {
    question: 'What sounds does a sparrow make?',
    answer: 'chirp'
  },
  {
    question: 'What sounds does a starling make?',
    answer: 'chirp'
  },
  {
    question: 'What sounds does a goldfinch make?',
    answer: 'warble'
  },
  {
    question: 'What sounds does a crane make?',
    answer: 'whoop'
  },
  {
    question: 'What sounds does a lark make?',
    answer: 'trill'
  },
  {
    question: 'What sounds does a dove make?',
    answer: 'coo'
  }
]

const buttonStyle = {
  border: '2px solid rgb(0, 95, 139)',
  backgroundColor: 'rgb(135, 217, 250)',
  height: '50px',
  width: '150px',
  borderRadius: '10px',
  marginTop: '10px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 3fr 1fr',
  justifyContent: 'center'
}

const row1Style = {
  gridArea: '1 / 1 / span 1 / span 1',
  color: '#0074D9',
  display: 'grid',
  justifyContent: 'center',
  fontFamily: ['Montserrat','sans-serif'],
  fontSize: '28pt'
}

const row2style = {
  gridArea: '2 / 1 / span 1 / span 1',
  display: 'grid',
  justifyContent: 'center',
  height: '240px'
}

const row3style = {
  gridArea: '3 / 1 / span 1 / span 1'
}

class App extends React.Component {
  state = { index: 0 }

  handleClick = () => {
    let _index = this.state.index;
    _index++;
    _index >= questions.length
      ? this.setState({ index: 0 })
      : this.setState({ index: _index})
  }

  render () {
    return (
      <div style={gridStyle}>
        <div style={row1Style}>
          <span>Bird Sounds Quiz</span>
        </div>
        <div style={row2style}>
          <Card question={questions[this.state.index]} />
        </div>
        <div style={row3style}>
          <button style={buttonStyle} onClick={this.handleClick}>Next Question</button>
        </div>
      </div>
    )
  }

}

export default App;