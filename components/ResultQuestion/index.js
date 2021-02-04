import React from 'react';
import Widget from '../Widget';
import PropTypes from 'proptypes';

function ResultQuestion({ results }) {
    
    return(
        <Widget>
            <Widget.Header>
                Resultado
            </Widget.Header>
            <Widget.Content>
                <h4>
                    Você acertou
                    {' '}{Array.from(results).filter((x) => x).length}{' '}
                    perguntas
                </h4>
                <ul>
                    {Array.from(results).map((result, index) => {    
                        console.log(result);                    
                        return <li> {`${index +1} ${result === true ? 'Acertou' : 'Errou'}`} </li>
                    })}
                </ul>
            </Widget.Content>
        </Widget>
    );
}

ResultQuestion.PropTypes = {
    results: PropTypes.array.isRequired,
}

export default ResultQuestion;