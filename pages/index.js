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

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pokémon Quiz</h1>
          </Widget.Header>          
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Quem é esse Pokémon?</h2>
          </Widget.Header>
          <Widget.Content>
            <Question></Question>
          </Widget.Content>
        </Widget>        
      </QuizContainer>
      <Footer />
      <GitHubCorner />

    </QuizBackground>
  )
}
