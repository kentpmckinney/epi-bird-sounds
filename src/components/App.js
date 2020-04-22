import React from 'react';
import Card from './Card/Card'
import './App.css';

let questions = [
  {
    question: 'What sounds does a bat make?',
    answer: 'screech'
  },
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
    question: 'What sounds do seals make?',
    answer: 'bark'
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
    question: 'What sounds does a bat make?',
    answer: 'screech'
  },
  {
    question: 'What sounds does a bat make?',
    answer: 'screech'
  },
  {
    question: 'What sounds does a bat make?',
    answer: 'screech'
  },
  {
    question: 'What sounds does a bat make?',
    answer: 'screech'
  },
  {
    question: 'What sounds does a bat make?',
    answer: 'screech'
  }
]

function App() {
  return (
    <React.Fragment>
      <h1><center>The Sounds Animals Make</center></h1>
      <div className='appgrid'>
        <div className='carddiv'>
          <Card
            questions={questions}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
