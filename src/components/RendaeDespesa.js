import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const RendaeDespesa = () => {
    const { transacoes } = useContext(GlobalContext);

    const rendas = transacoes
        .filter(item => item.tipo === '0')
        .reduce((acc, item) => (acc += item.valoradc), 0)
        .toFixed(2);

    const despesas = transacoes
        .filter(item => item.tipo === '1')
        .reduce((acc, item) => (acc += item.valoradc), 0)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Rendas</h4>
                <p className="money plus">+ R$ { rendas }</p>
            </div>
            <div>
                <h4>Despesas</h4>
                <p className="money minus">- R$ { despesas }</p>
            </div>
        </div>
    )
}