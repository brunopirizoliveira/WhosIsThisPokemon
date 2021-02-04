import styled from 'styled-components';

const Widget = styled.div`
  /* margin-top: 45px; */
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  opacity:0.95;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 8px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 15px;
  margin-bottom: 4px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export default Widget;
