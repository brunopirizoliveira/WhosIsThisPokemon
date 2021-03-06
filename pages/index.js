import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Input from '../components/Input';
import Button from '../components/Button';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Link from '../components/Link';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   text-align: -webkit-center;
//   background-size: cover;
//   background-position: center;
// `;

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
            <h2>Pokémon Quiz</h2>
          </Widget.Header>
          <Widget.Content>
            <h4>Teste seu conhecimentos sobre Pokémon, vamos ver se você é um mestre</h4>            
            <form onSubmit={function(e) {
              e.preventDefault();
              jogar();
            }}>            
              <Input name="nomeDoUsuario"
                placeholder="Diz ai seu nome" 
                onChange={(event) => setName(event.target.value) }
              />
              <Button type="submit" disabled={name.length === 0}  >
              {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
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
            <h2>Quizzes da rapeize</h2>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((link) => {
                return(
                  <li key={link}>
                    <Link href={link}>{link}</Link>
                  </li>                  
                )                
              })}
            </ul>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer />
      <GitHubCorner />
    </QuizBackground>
  );
}
