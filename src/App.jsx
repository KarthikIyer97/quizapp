import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
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
          text: "Daniel RadCliff",
          correct: true,
        },
        
      ],
    },
    {
      id: 4,
      question: " What is the short form of the word app used in the context of mobile app?",
      answers: [
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "App",
          correct: false,
        },
        {
          text: "Appliances",
          correct: false,
        },
        {
          text: "Application",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "According to our Union Health Ministry and WHO, to prevent the spread of Covid-19, at least for how many seconds we should wash our hands with soap?",
      answers: [
        {
          text: "1-5 seconds",
          correct: false,
        },
        {
          text: "20-30 seconds",
          correct: true,
        },
        {
          text: "10-15 seconds",
          correct: false,
        },
        {
          text: "5-10 seconds",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which river flows through marble stones at Bhedaghat in Madhya Pradesh?",
      answers: [
        {
          text: "Chambal",
          correct: false,
        },
        {
          text: "Betwa",
          correct: false,
        },
        {
          text: "Narmada",
          correct: true,
        },
        {
          text: "shipra",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which actor has a spice name from a film production company?",
      answers: [
        {
          text: "Salman Khan",
          correct: false,
        },
        {
          text: "Sharukh Khan",
          correct: true,
        },
        {
          text: "Saif Ali Khan",
          correct: false,
        },
        {
          text: "Amir Khan",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Rani Rampal became the first player of which sport to win the “World Games Athlete of the Year 2019” award in January 2020?",
      answers: [
        {
          text: "Hockey",
          correct: true,
        },
        {
          text: "table tennis",
          correct: false,
        },
        {
          text: "Cricket",
          correct: false,
        },
        {
          text: "Football",
          correct: false,
        },
      ],
      
    },
    {
      id: 9,
      question: "Which of these states is also known for “Tales of Aligarh”, “Surma of Bareilly” and “Chudio of Firozabad”?",
      answers: [
        {
          text: "Himachal Pradesh",
          correct: false,
        },
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "A state in Eastern India",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these 1450 planets would be heavier than iron?",
      answers: [
        {
          text: "1 kg rice",
          correct: false,
        },
        {
          text: "1.4 kg paper",
          correct: false,
        },
        {
          text: "1.7 kg cotton",
          correct: true,
        },
        {
          text: "1.3 kg straw",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented the telescope in 1608?",
      answers: [
        {
          text: "johenij kepler",
          correct: false,
        },
        {
          text: "Hans Lipparshi",
          correct: true,
        },
        {
          text: "gallio galilei",
          correct: false,
        },
        {
          text: "Nicolas Kopernicas",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The book “Matoshree” written by former Lok Sabha Speaker Sumitra Mahajan is based on the life of which Indian queen?",
      answers: [
        {
          text: "Rani Lakshmi Bai",
          correct: false,
        },
        {
          text: "Rani Padmini",
          correct: false,
        },
        {
          text: "Rani Durgavati",
          correct: false,
        },
        {
          text: "Rani Ahilyabai Holkar",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "The Bhopal gas tragedy in 1984 was caused by the leakage of which gas?",
      answers: [
        {
          text: "hydrogen azide",
          correct: false,
        },
        {
          text: "methyl isocyanate",
          correct: true,
        },
        {
          text: "Dicloroacillin",
          correct: false,
        },
        {
          text: "silicon tetrachloride",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the name of the indigenously developed anti-radiation missile successfully in October 2020 by DRDO?",
      answers: [
        {
          text: "Rudra M",
          correct: true,
        },
        {
          text: "Nirbhay",
          correct: false,
        },
        {
          text: "Mahadev",
          correct: false,
        },
        {
          text: "Shivam",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Line displays from Shri Ramcharitmanas this use the 'Complete: : ______ nisichar nikar niwaasa, ihan kahaan sajjan kar baasa",
      answers: [
        {
          text: "Sumeru parvat",
          correct: false,
        },
        {
          text: "Kishkindha",
          correct: false,
        },
        {
          text: "Dandaakaranya",
          correct: false,
        },
        {
          text: "Lanka",
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
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
