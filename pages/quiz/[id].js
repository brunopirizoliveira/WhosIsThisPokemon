import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizPage from '../quiz';

export default function QuizDaGaleraPage({dbExterno}) {
    return(
        <ThemeProvider theme={dbExterno.theme}>
            <QuizPage externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    
    const dbExterno = await fetch('http://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json()
        }
        throw new Error('Não foi possivel pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => console.log(err));

    console.log(dbExterno);
    console.log(context.query.id);

    return{
        props: {
            dbExterno,
        },
    };
}