import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const Image = styled.img`  
  flex: 1;
  background-size: cover;
  background-position: center;  
  /* height: 300px; */
  width: 200px;
  align-self: center;
`;

export default function QuizImage({img}) {
    return (
        <Image src={img} />
    );
}

Image.PropTypes = {
    img: PropTypes.string.isRequired,
}