import React, { useState } from 'react';
import Head from 'next/head';

import db from '../db.json';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizImage from '../components/QuizImage';
import QuestionWidget from '../components/QuestionWidget';
import LoadingQuestion from '../components/LoadingQuestion';
import ResultQuestion from '../components/ResultQuestion';

export default function QuizPage() {
    
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];
    const questionId = `question_${questionIndex}`;

    const screenStates = {
        QUIZ: "QUIZ",
        LOADING: "LOADING",
        RESULT: "RESULT",
    }

    const [screenState, setScreenState] = React.useState(screenStates.LOADING);

    function addResult(result) {
      setResults([
        ...results,
        result,
      ]);
    }

    React.useEffect(() => {
      setTimeout(() => {
        setScreenState(screenStates.QUIZ);
      }, 1 * 300)      
    }, []);

    function handleSubmit() {
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
      } else {
        setScreenState(screenStates.RESULT);
      }
    }

    return (
        <QuizBackground>
          <Head>
            <title>Pokemon Quizz</title>            
          </Head>
          <QuizContainer>
            {screenState === screenStates.QUIZ &&
                <QuestionWidget
                    totalQuestions={totalQuestions}
                    question={question}
                    questionIndex={questionIndex}
                    questionId={questionId}
                    onSubmit={handleSubmit}
                    addResult={addResult}
                />
            }

            {screenState === screenStates.LOADING &&
                <LoadingQuestion />
            }

            {screenState === screenStates.RESULT &&
                <ResultQuestion results={results} />
            }

          </QuizContainer>
          <Footer />
          <GitHubCorner />
        </QuizBackground>
      );
}