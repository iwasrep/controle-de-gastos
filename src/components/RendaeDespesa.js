import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const RendaeDespesa = () => {
    const { transacoes } = useContext(GlobalContext);

    const montante = transacoes.map(transacoes => transacoes.valoradc);

    const rendas = montante
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const despesas = ( montante
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Renda</h4>
                <p className="money plus">R$ { rendas }</p>
            </div>
            <div>
                <h4>Despesas</h4>
                <p className="money minus">R$ { despesas }</p>
            </div>
        </div>
    )
}
