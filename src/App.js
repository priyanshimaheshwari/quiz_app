import React, { useEffect, useMemo, useState } from 'react'
import "./App.css";
import Timer from './components/Timer';
import Trivia from './components/Trivia';


const App = () => {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
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
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='h-[800px] flex bg-[#020230] text-white'>
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
      
    </div>
  )
}

export default App