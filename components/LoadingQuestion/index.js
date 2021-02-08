import React, { useState } from 'react';
import Widget from '../Widget';
import { motion } from 'framer-motion';

export default function LoadingQuestion() {
    return(
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
                <h2>Carregando Pergunta</h2>
            </Widget.Header>
            <Widget.Content>
                <p>Buscando questões</p>
            </Widget.Content>
        </Widget>
    );
}