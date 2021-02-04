import React, { useState } from 'react';
import styled from 'styled-components';

const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    width: 100%;
    height: 40px;
    background-color: red;
    color: white;
`;

export default function AlertError() {
    return(
        <Error>
            Você Errou!
        </Error>
    );
}