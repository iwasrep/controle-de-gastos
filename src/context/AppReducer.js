export default (state, acao) => {
    switch (acao.type) {
        case "DELETAR_TRANSACAO":
            return {
                ...state,
                transacoes: state.transacoes.filter(
                    (transacoes) => transacoes.id !== acao.payload
                ),
            };
        case "ADICIONAR_TRANSACAO":
            return {
                ...state,
                transacoes: [acao.payload, ...state.transacoes],
            };
        default:
            return state;
    }
};