import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 500px;
  padding-top: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
