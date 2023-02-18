import React, { useEffect, useMemo, useState } from 'react'
import "./App.css";
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';


const App = () => {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },{
      id: 4,
      question: "For the Olympics and World Tournaments, the dimensions of basketball court are",
      answers: [
        {
          text: "28 m x 15 m",
          correct: true,
        },
        {
          text: "26 m x 14 m",
          correct: false,
        },
        {
          text: "27 m x 16 m",
          correct: false,
        },
        {
          text: "28 m x 16 m",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Logarithm tables were invented by",
      answers: [
        
        {
          text: "John Doe",
          correct: false,
        },
        {
          text: "John Napier",
          correct: true,
        },
        {
          text: "John Harrison",
          correct: false,
        },
        {
          text: "John Douglas",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "With which sport is the Jules Rimet trophy associated?",
      answers: [
        {
          text: "Football",
          correct: true,
        },
        {
          text: "Hockey",
          correct: false,
        },
        {
          text: "Golf",
          correct: false,
        },
        {
          text: "Basketball",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Kemal Ataturk was",
      answers: [
        {
          text: "revolutionary leader of Soviet Union",
          correct: false,
        },
        {
          text: "the first President of Independent Kenya",
          correct: false,
        },
        {
          text: "the founder of modern Turkey",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Kathakali, Mohiniatam and Ottamthullal are the famous dances of",
      answers: [
       
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Orissa",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
        {
          text: "Kerala",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Jaspal Rana is associated with which of the following games?",
      answers: [
        {
          text: "Shooting",
          correct: true,
        },
        {
          text: "Swimming",
          correct: false,
        },
        {
          text: "Archery",
          correct: false,
        },
        {
          text: "Weightlifting",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Lance Armstrong, a sportsperson of international repute, belongs to which of the following countries?",
      answers: [
        {
          text: "USA",
          correct: true,
        },
        {
          text: "Ukraine",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Brazil",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Kiran Bedi is",
      answers: [
        {
          text: "first woman IPS officer",
          correct: true,
        },
        {
          text: "first woman advocate",
          correct: false,
        },
        {
          text: "first woman IAS officer",
          correct: false,
        },
        {
          text: "first woman judge",
          correct: false,
        },
      ],
    },{
      id: 12,
      question: "National Defence Academy is situated at",
      answers: [
       
        {
          text: "New Delhi",
          correct: false,
        },
        {
          text: "Khadakvasla",
          correct: true,
        },
        {
          text: "Wellington",
          correct: false,
        },
        {
          text: "Dehradun",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Number of commands of Air Force are",
      answers: [
        {
          text: "five",
          correct: false,
        },
        {
          text: "six",
          correct: false,
        },
        {
          text: "seven",
          correct: true,
        },
        {
          text: "eight",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Normally the Commonwealth Games are held at intervals of",
      answers: [
        {
          text: "4 years",
          correct: true,
        },
        {
          text: "3 years",
          correct: false,
        },
        {
          text: "5 years",
          correct: false,
        },
        {
          text: "there is no fixed interval",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Mount Everest was captured by Edmund Hillary and Tenzing Norgay in the year",
      answers: [
        {
          text: "1953",
          correct: true,
        },
        {
          text: "1995",
          correct: false,
        },
        {
          text: "1956",
          correct: false,
        },
        {
          text: "1953",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: " $ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='h-[800px] flex bg-[#020230] text-white'>
      {!username ? (
        <Start setUsername={setUsername} />
        ) : (
          <>
      <div className='w-3/4 h-full'><img className='w-3/4 h-[800px] items-center flex absolute' src='https://thescoopbeats.com/wp-content/uploads/2020/09/05_09_2020-kbc_20711034.jpg' alt='/'/>

      {timeOut ?(<h1 className='text-white relative text-6xl pl-[400px] pt-[400px]'>You earned : {earned}</h1>):(
       <>
      <div className='top'>
        <div className='timer'> <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    /></div><div className=' pt-[350px]'><Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  /></div>
        
        </div>
        </>
        )
        }
        </div>

        
      <div className='w-1/4 h-[800px] flex items-center justify-center relative'>
        <ul className='w-full p-4'>
          {moneyPyramid.map((m)=>(
          <li className={questionNumber===m.id?"bg-teal-400 rounded-xl":"bg-[#020230]"}><div className='flex  item-center  rounded p-2'>
          <span className='text-xl  '>{m.id}</span>
          <span className='text-2xl pl-16 '>{m.amount}</span></div></li>
          ))}
            </ul>
            </div>
            </>
        )}
    </div>
  )
}

export default App