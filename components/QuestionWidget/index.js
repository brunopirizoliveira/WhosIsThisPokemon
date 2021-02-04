import React, { useState } from 'react';
import PropTypes from 'proptypes';
import Widget from '../Widget';
import Button from '../Button';
import QuizImage from '../QuizImage';

export default function QuestionWidget({totalQuestions, question, questionId, onSubmit}) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmit, setIsQuestionSubmit] = React.useState(false);
    const isCorrect = question !== undefined ? question.answer === selectedAlternative : undefined;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return(
        <Widget>
            <Widget.Header>
                <h3>Pergunta 1 de {totalQuestions}</h3>
            </Widget.Header>
            <Widget.Content>
                <h4>{question.title}</h4>
                {/* <h4>{question.description}</h4> */}

                <QuizImage img={question.image} />
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsQuestionSubmit(true);
                    setTimeout(() => {
                        setIsQuestionSubmit(false);
                        setSelectedAlternative(undefined);
                        onSubmit();                        
                    }, 3 * 1000);
                    
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {                    
                        return(
                            <Widget.Topic
                                key={alternativeIndex}
                                as="label" 
                                htmlFor={alternativeIndex}
                            >
                                <input 
                                    id={alternativeIndex}
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(alternativeIndex)}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>    
                        );
                        
                    })}
                    {isQuestionSubmit && isCorrect && <p>VocÊ acertou!</p>}
                    {isQuestionSubmit && !isCorrect && <p>VocÊ errou!</p>}
                    <Button type="submit" disabled={!hasAlternativeSelected}>
                        Confirmar
                    </Button>
                </form>

            </Widget.Content>
        </Widget>
    );
}

QuestionWidget.PropTypes = {
    totalQuestions: PropTypes.number.isRequired,
    question: PropTypes.array.isRequired,
    questionId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}