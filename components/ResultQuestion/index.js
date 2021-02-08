import React from 'react';
import Widget from '../Widget';
import PropTypes from 'proptypes';
import Link from '../Link';
import { motion } from 'framer-motion';

function ResultQuestion({ results }) {
    
    return(
        <Widget
            as={motion.section}
            variants={{
                show: { opacity: 1 },
                hidden: { opacity: 0 } 
            }}
            initial="hidden"
            animate="show"
        >
            <Widget.Header>
                <h3>Resultado</h3>
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
                <p>
                    <Link href={"/"}>Voltar ao início</Link>
                </p>
            </Widget.Content>
        </Widget>
    );
}

ResultQuestion.PropTypes = {
    results: PropTypes.array.isRequired,
}

export default ResultQuestion;