import React, { useContext } from 'react';
import { Transacao } from './Transacao';

import { GlobalContext } from '../context/GlobalState';

export const ListadeTransacoes = () => {

    const { transacoes } = useContext(GlobalContext);

    return (
        <>
          <h3>Histórico de Transações</h3>
          <ul id="list" className="list">
            {transacoes.map(transacoes => (<Transacao key={transacoes.id} transacoes={transacoes} />))}    
          </ul>  
        </>
    )
}
