import { useState } from 'react';
import Student from './Student';
import './App.css';

const App = () => {

  const [studentData] = useState(
    {
      students: [
        {
          name: 'Cait Yomorta',
          bio: 'Born in Jamaica in 1979. Lives in Dallas, Texas. Loves reading and cooking.',
          scores: [
            {
              date: '2018-02-08',
              score: 77
            },
            {
              date: '2018-04-22',
              score: 92
            },
            {
              date: '2018-09-15',
              score: 68
            }
          ]
        },
        {
          name: 'Holly Baird',
          bio: 'Born in Chicago, Illinois in 1985. Lives in New York, New York. Loves exercising.',
          scores: [
            {
              date: '2018-12-14',
              score: 88
            },
            {
              date: '2019-01-09',
              score: 79
            },
            {
              date: '2019-02-23',
              score: 91
            },
            {
              date: '2019-03-01',
              score: 95
            }
          ]
        },
        {
          name: 'Wes Mungia',
          bio: 'Born in Uganda in 1989. Lives in Atlanta, Georgia. Loves nature walking.',
          scores: [
            {
              date: '2018-10-11',
              score: 62
            },
            {
              date: '2018-11-24',
              score: 74
            },
            {
              date: '2018-12-19',
              score: 85
            }
          ]
        }
      ]
    }
  )

  return (
    <div className="App">
      {studentData.students.map((student, index) => <Student key={index} student={student} />)}
    </div>
  );
}

export default App;