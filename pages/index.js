import styled from 'styled-components';
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
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    
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
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pokémon Quiz</h1>
          </Widget.Header>          
          <Widget.Content>
              <p>Teste seu conhecimentos sobre Pokémon, vamos ver se você é um mestre</p>              
          </Widget.Content>
          <Widget.Content>
              <InputLogin placeholder="Digite seu nome para jogar"/>              
              <ButtonLogin>Jogar</ButtonLogin>
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
  )
}
