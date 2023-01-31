import { useEffect, useState } from "react"


export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay=(duration,callback)=>{
       setTimeout(()=>{
         callback();
       }, duration);
  };
  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000,()=>
      setClassName(a.correct?"answer correct":"answer wrong")
    );
    delay(6000,()=>{
      
    },3000);
    setTimeout(()=>{
      setClassName(a.correct?"answer correct":"answer wrong")
    },3000);
}
  return (
    <div className='pl-[500px] pr-[200px] font-extrabold '>
      <div className="bg-gradient-to-b from-violet-900 to-black text-center p-4 border rounded-xl">{question?.question}</div> 
      <div className="pt-[80px]  flex flex-wrap justify-between ">{question?.answers.map((a)=>(
       <div
       className={selectedAnswer === a ? className : "answer"}
       onClick={() => !selectedAnswer && handleClick(a)}
     >
          {a.text}</div>
      ))}
      </div> 
    </div>
  )
}

