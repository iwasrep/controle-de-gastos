import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transacao = ({ transacoes }) => {
    const { deletarTransacoes } = useContext(GlobalContext);
    const sinal = transacoes.tipo === '0' ? '+' : '-';

    return (
        <li className={transacoes.tipo === '0' ? 'plus' : 'minus'}>
            {transacoes.titulo} <span>{sinal} R$ {Math.abs(transacoes.valoradc)}</span> <button onClick={() => deletarTransacoes(transacoes.id) } className="delete-btn">X</button>
        </li>
    )
}
