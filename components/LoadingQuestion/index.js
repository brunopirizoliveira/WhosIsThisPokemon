import React, { useState } from 'react';
import Widget from '../Widget';

export default function LoadingQuestion() {
    return(
        <Widget>
            <Widget.Header>
                <h2>Carregando Pergunta</h2>
            </Widget.Header>
            <Widget.Content>
                <p>Buscando questões</p>
            </Widget.Content>
        </Widget>
    );
}