import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AdcTransacao = () => {
    const [titulo, setTitulo] = useState('');
    const [valoradc, setValoradc] = useState(0);

    const { adicionarTransacoes } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const novaTransacao = {
            id: Math.floor(Math.random() * 100000000),
            titulo,
            valoradc: +valoradc
        }
        
        adicionarTransacoes(novaTransacao);
    }

    return (
        <>
            <h3>Adicionar Nova Transação</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Título</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value) } placeholder="Digite algo sobre a transação..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Valor <br />
                        (Negativo = Despesa, Positivo = Renda)
                    </label>
                    <input type="number" value={valoradc} onChange={(e) => setValoradc(e.target.value) } placeholder="Digite o valor..." />
                </div>
                <button className="btn">Adicionar Transação</button>
            </form>
        </>
    )
}
