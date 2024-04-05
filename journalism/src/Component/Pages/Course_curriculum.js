import React, { useState } from 'react';
import '../CSS/course_c.css';

function App() {
  // Define state for storing expanded state of each question
  const [expanded, setExpanded] = useState(new Array(4).fill(false)); // Initialize with false values for each question

  // Function to toggle the expanded state of a question
  const toggleAnswer = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded]; // Create a copy of the previous state array
      newExpanded[index] = !newExpanded[index]; // Toggle the value at the specified index
      return newExpanded; // Return the updated array
    });
  };

  const questions = [
    {
      question: 'Who is this course for?',
      answer: 'This course is designed for passionate individuals who aspire to work as journalists.',
    },
    {
      question: 'Who is Mr. Arun?',
      answer: 'Mr. Arun is a retired journalist who now wishes to share his knowledge with the world through his two-week course.',
    },
    {
      question: 'Why choose this course?',
      answer: 'This two-week course provides experiential knowledge, offering comprehensive insights into the field of journalism.',
    },
    {
      question: 'How does this course work?',
      answer: 'The course begins by explaining the basics of journalism and progresses to addressing real-world challenges. It also offers personalized mentorship.',
    },
  ];

  return (
    <div className='course-container'>
      <div className='question-container'>
        <h1>Frequently Asked Questions</h1>
        {questions.map((item, index) => (
          <div key={index} className='question'>
            <div className='question-header' onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className={expanded[index] ? 'arrow-icon arrow-expanded' : 'arrow-icon'}>&#9660;</span>
            </div>
            {expanded[index] && <div className='answer-container'>{item.answer}</div>}
            <hr className='divider-line' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
