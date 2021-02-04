import React from 'react';
import Widget from '../Widget';
import PropTypes from 'proptypes';

export default function ResultQuestion({ results }) {
    console.log(results);
    return(
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content>
                <p>Você acertou  
                    {results.reduce((somatorioAtual, resultAtual) => {
                        const isAcerto = resultAtual === true;
                        if(isAcerto) {
                            return somatorioAtual + 1;
                        }
                        return somatorioAtual;
                    }, 0)}
                     questões
                </p>
                <ul>
                    {results.map((result) => {                        
                        return <li>{result === true ? 'Acertou' : 'Errou'} </li>
                    })}
                </ul>
            </Widget.Content>
        </Widget>
    );
}

ResultQuestion.PropTypes = {
    results: PropTypes.array.isRequired,
}