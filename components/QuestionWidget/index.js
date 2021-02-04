import React, { useState } from 'react';
import PropTypes from 'proptypes';
import Widget from '../Widget';
import Button from '../Button';
import QuizImage from '../QuizImage';
import AlertSuccess from '../AlertSuccess';
import AlertError from '../AlertError';
import AlternativesForm from '../AlternativeForm';

export default function QuestionWidget({totalQuestions, question, questionIndex, questionId, onSubmit, addResult}) {

    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmit, setIsQuestionSubmit] = React.useState(false);
    const isCorrect = question !== undefined ? question.answer === selectedAlternative : undefined;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return(
        <Widget>
            <Widget.Header>
                <h3>Pergunta {questionIndex + 1} de {totalQuestions}</h3>
            </Widget.Header>
            <Widget.Content>
                <h4>{question.title}</h4>
                {/* <h4>{question.description}</h4> */}

                <QuizImage img={question.image} />
                
                <AlternativesForm onSubmit={(e) => {
                    e.preventDefault();
                    setIsQuestionSubmit(true);
                    setTimeout(() => {
                        addResult(isCorrect);
                        setIsQuestionSubmit(false);
                        setSelectedAlternative(undefined);
                        onSubmit();                        
                    }, 3 * 1000);
                    
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {                    
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative == alternativeIndex;
                        return(
                            <Widget.Topic
                                key={alternativeId}
                                as="label" 
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionSubmit && alternativeStatus}
                                onClick={() => setSelectedAlternative(alternativeIndex)}
                            >
                                <input 
                                    id={alternativeIndex}
                                    name={questionId}                                    
                                    // onChange={() => setSelectedAlternative(alternativeIndex)}
                                    type="radio"
                                    style={{ display: 'none' }}
                                />
                                {alternative}
                            </Widget.Topic>    
                        );
                        
                    })}
                    {isQuestionSubmit && isCorrect && <AlertSuccess />}
                    {isQuestionSubmit && !isCorrect && <AlertError />}
                    {!isQuestionSubmit && 
                        <Button type="submit" disabled={!hasAlternativeSelected}>
                            Confirmar
                        </Button>
                    }
                    
                </AlternativesForm>

            </Widget.Content>
        </Widget>
    );
}

QuestionWidget.PropTypes = {
    totalQuestions: PropTypes.number.isRequired,
    questionIndex:  PropTypes.number.isRequired,
    question: PropTypes.array.isRequired,
    questionId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    addResult: PropTypes.func.isRequired,
}