import './Botao.css';
import React, { type ReactElement } from 'react';

interface BotaoProps{
    children: ReactElement | string
}

const Botao = (props:BotaoProps)=> {
    return(
        <button className='botao'>
            {props.children}
        </button>
    )

}

export default Botao;