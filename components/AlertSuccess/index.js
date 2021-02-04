import React, { useState } from 'react';
import styled from 'styled-components';

const Success = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
`;

export default function AlertSuccess() {
    return(
        <Success>
            Você Acertou!
        </Success>
    );
}