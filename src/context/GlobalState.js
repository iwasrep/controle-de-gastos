import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Estado inicial
const initialState = {
    transacoes: []
}

// Criando Contexto
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Ações
    function deletarTransacoes(id){
        dispatch({
            type: 'DELETAR_TRANSACAO',
            payload: id
        });
    }

    function adicionarTransacoes(transacoes){
        dispatch({
            type: 'ADICIONAR_TRANSACAO',
            payload: transacoes
        });
    }

    return (<GlobalContext.Provider value={{
        transacoes: state.transacoes,
        deletarTransacoes,
        adicionarTransacoes
    }}>
        {children}
    </GlobalContext.Provider>);
}
