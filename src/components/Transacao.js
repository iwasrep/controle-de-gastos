import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transacao = ({ transacoes }) => {
    const { deletarTransacoes } = useContext(GlobalContext);
    const sinal = transacoes.valoradc < 0 ? '-' : '+';

    return (
        <li className={transacoes.valoradc < 0 ? 'minus' : 'plus'}>
            {transacoes.titulo} <span>{sinal} R$ {Math.abs(transacoes.valoradc)}</span> <button onClick={() => deletarTransacoes(transacoes.id) } className="delete-btn">X</button>
        </li>
    )
}
