import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   text-align: -webkit-center;
//   background-size: cover;
//   background-position: center;
// `;

const Question = styled.div`  
  background-image: url(${db.pokemonbg});
  flex: 1;
  background-size: cover;
  background-position: center;  
  height: 350px;
`;

const InputLogin = styled.input`
  width: 100%;
  padding: 0px;
  margin: 0px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  color: white;  
  font-size: 18px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid;
    padding-left: 3px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 3px;
  }
`;

const ButtonLogin = styled.button`
  width: 100%;
  padding: 0px;
  margin: 0px;
  height: 50px;
  margin-top: 5px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 24px;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  function jogar() {      
      router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground>
      <Head>
        <title>Pokemon Quizz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h2>Pokémon Quiz</h2>
          </Widget.Header>
          <Widget.Content>
            <h4>Teste seu conhecimentos sobre Pokémon, vamos ver se você é um mestre</h4>            
            <form onSubmit={function(e) {
              e.preventDefault();
              jogar();
            }}>            
              <InputLogin 
                placeholder="Diz ai seu nome" 
                onChange={function(event) {
                  setName(event.target.value)
                }}
              />
              <ButtonLogin type="submit" disabled={name.length === 0}>
                Jogar {name}                
              </ButtonLogin>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Quizzes da rapeize</h2>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer />
      <GitHubCorner />
    </QuizBackground>
  );
}
