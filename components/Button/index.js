import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const Button = styled.button`
width: 100%;
padding: 0px;
margin: 0px;
height: 40px;
margin-top: 5px;
border: 1px solid;
background-color: ${({ theme }) => theme.colors.primary};
border-color: ${({ theme }) => theme.colors.secondary};
color: ${({ theme }) => theme.colors.contrastText};
font-size: 18px;
`;



Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;